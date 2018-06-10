/**
 * Created by sergiomonteiro on 22/02/2017.
 */
var config=require('../config.js');
var request = require('request');
var eventBus=require('./events.js');
var md5=require('md5');
var _=require('underscore');

var index=1;
var nRequests=0;

eventBus.on(eventBus.events.OUTLET_UPSERT_PROCESSING,function(outlet) {
    outletUpsert(outlet);
});

function outletUpsert(outlet) {
    var buffer = '';

    var body = {
        outlet_url: outlet.outlet_url,
        outlet_name: outlet.outlet_name,
        impressions: outlet.impression,
        outlet_languages: outlet.outlet_language,
        outlet_location: outlet.outlet_location
    }
    var uri = config.srvApiHost+":"+config.srvApiPort+config.srvApiPath;
    var req = request({
        uri: uri,
        method: 'POST',
        qs: body,
        followRedirect: true,
        timeout: config.httpTimeout,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0',
            "Authorization": config.srvApiToken,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    });

    req.on('data', function (chunk) {
        if (chunk)
            buffer += chunk;
    });

    req.on('error', function (e) {
        eventBus.unQueued(eventBus.events.OUTLET_UPSERT_PROCESSING);
        eventBus.emit(eventBus.events.OUTLET_UPSERT_ERROR, {outlet: outlet},eventBus.events.OUTLET_UPSERT_PROCESSING);
        console.log("[OutletUpsert] error response:", e); //TODO: Review status code
    });


    req.on('end', function () {
        eventBus.unQueued(eventBus.events.OUTLET_UPSERT_PROCESSING);
        console.log(req.response.statusCode);

        console.log(JSON.parse(buffer));
        if (req.response.statusCode > 302) {
            eventBus.emit(eventBus.events.OUTLET_UPSERT_ERROR, {outlet: outlet},eventBus.events.OUTLET_UPSERT_PROCESSING);
        } else {
            var json_buffer=JSON.parse(buffer);
            eventBus.emit(eventBus.events.OUTLET_UPSERT_DONE, {
                id: outlet.id,
                feed_id:outlet.feed_id,
                article_id:outlet.article_id,
                statusCode: req.response.statusCode,
                outlet_id: json_buffer.outlet.id,
                outlet_url: outlet.outlet_url,
            },eventBus.events.OUTLET_UPSERT_PROCESSING);
        }
        buffer = null;
    });
    req.write(JSON.stringify(body));
    req.end();
}
