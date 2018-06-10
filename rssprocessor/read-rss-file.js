fs = require('fs');
var parser = require('xml2json');
var eventBus=require('./events.js');
var eventBus=require('./events.js');
xmlReader = require('read-xml');
var Item=require('./item.js');
var config=require('../config.js');
var request = require('request');



var feeds = [];
var queueArticlesSave = [];

eventBus.on(eventBus.events.XML_TO_PROCESS,function(rssfeed){
    rssParser(rssfeed.xml,rssfeed.id,rssfeed.project_id);
});

eventBus.on(eventBus.events.ARTICLE_CHECK_HISTORY_PROCESSED,function(data){
    feeds[data.id].totalProcessed++;
    feeds[data.id].articles[data.article_id].project_id=data.article_project_id;
    var i = queueArticlesSave.length;

    queueArticlesSave.push({status: 'UPSERT', feed_id: data.id, article_id: data.article_url});
    feeds[data.id].totalQueued++;
    var article=feeds[data.id].articles[data.article_id];
    eventBus.emitQueued(eventBus.events.OUTLET_UPSERT_PROCESSING, {
        id:i,
        article_id: data.article_id,
        feed_id: data.id,
        outlet_name: article.outlet_name,
        outlet_url: article.outlet_url,
        impression: article.impression,
        outlet_language: article.outlet_language,
        outlet_location: article.outlet_location,
        retries:0,
    });
});

eventBus.on(eventBus.events.OUTLET_UPSERT_PROCESSING,function(outlet) {
    outletUpsert(outlet);
});

eventBus.on(eventBus.events.OUTLET_UPSERT_DONE,function(outlet){
    feeds[outlet.feed_id].articles[outlet.article_id].outlet_id=outlet.outlet_id;
    // eventBus.emitQueued(eventBus.events.ARTICLE_SAVE_INIT,{ queueArticleSave_id: outlet.id, article: feeds[0].articles[outlet.article_id], retries:0})
    // queueArticlesSave[outlet.id].status='TOSAVE';
});


//////// Setup 1 /////////////

xmlReader.readXML(fs.readFileSync('./rssprocessor/burrellesluce.xml'), function(err, data) {
  if (err) {
    console.error(err);
  }

  feeds.push(
                {
                    id: 0,
                    url: "feed-url",
                    project_id: 1,
                    totalArticles: 0,
                    totalProcessed: 0,
                    totalQueued: 0,
                    totalExists: 0,
                    status: 'Init'
                }
            )

    eventBus.emit(eventBus.events.XML_TO_PROCESS,{id:0, project_id:[1], xml:data.content});
});


////// Setup 2 ///////////////

function rssParser(buffer, id, project_id) {
    var i0 = 0;
    var articles=[];
    buffer=buffer.replace(/<article.*>/g,"<item>");
    buffer=buffer.replace(/<\/article.*/g,"</item>");
    while (true) {
        var i1 = buffer.indexOf("<item>", i0);
        if (i1 < 0) break;
        var i2 = buffer.indexOf("</item>", i1) + 7;
        if (i2 - 7 < 0) break;
        i0 = i2;
        var xmlItem = buffer.substring(i1, i2);
        var item = new Item(xmlItem, project_id);
        articles.push(item.getOutput());
    }

    feeds[id].status='Processing';
    feeds[id].totalArticles=articles.length;
    feeds[id].articles=articles;

    console.log("Feeds ======>>>>>", feeds);
    for(var k=0;k<feeds[id].articles.length;k++)
        eventBus.emitQueued(eventBus.events.ARTICLE_CHECK_HISTORY_PROCESSED,{id: feeds[id].id, article_id: k, article_url: feeds[0].articles[k].article_id , article_project_id: feeds[0].articles[k].projects });

}

////////////////////////////


////////// setup 3 ///////////

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

