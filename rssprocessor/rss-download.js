/**
 * Created by sergiomonteiro on 21/02/2017.
 */
var config=require('../config.js');
var request = require('request');
var eventBus=require('./events.js');

var index=1;
var nRequests=0;

eventBus.on(eventBus.events.RSS_TO_PROCESS,function(rssfeed){
    loadRSS(rssfeed);
});

function loadRSS(rssfeed) {
    var buffer = '';
    var loading=false;

    var req = request({
        uri: rssfeed.url,
        timeout: config.httpTimeout,
        method: 'GET',
        maxSockets: 20,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
        followRedirect: true,
        timeout: config.httpTimeout,
    });

    req.on('data', function (chunk) {
        if(!loading) {
            loading=true;
            eventBus.emit(eventBus.events.RSS_LOADING, {id:rssfeed.id});
        }
        if (chunk)
            buffer += chunk;
    });

    req.on('error', function (e) {
        eventBus.unQueued(eventBus.events.RSS_TO_PROCESS);
        eventBus.emit(eventBus.events.RSS_ERROR,rssfeed);
        console.log("[Feeds] Feeds error response:",e); //TODO: Review status code
    });

    req.on('end', function() {
        eventBus.unQueued(eventBus.events.RSS_TO_PROCESS);
        if (req.response.statusCode > 302) {
            eventBus.emit(eventBus.events.RSS_ERROR, rssfeed);
        }else {
            eventBus.emit(eventBus.events.RSS_LOADED,{id: rssfeed.id, statusCode: req.response.statusCode, xml: buffer});
        }
        buffer = null;

    });
}
