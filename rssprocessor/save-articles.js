/**
 * Created by sergiomonteiro on 24/02/2017.
 */
var config = new require('../config.js');
var eventBus=require('./events.js');

var mongodb = require('mongodb').MongoClient;
var mongodbCrendentials="mongodb://"+config.mongoSrv+":"+config.mongoPort+"/"+config.mongoDb;

var index=1;
var nRequests=0;

eventBus.on(eventBus.events.ARTICLE_SAVE_INIT,function(article) {
    console.log("===================================");
    console.log(article);
    // saveArticle(article);
});

function saveArticle(article){
    mongodb.connect(mongodbCrendentials ,function(err, db) {
        if(err){
            eventBus.unQueued(eventBus.events.ARTICLE_SAVE_INIT);
            if((article.retries++)<config.maxRetries)
                eventBus.emitQueued(eventBus.events.ARTICLE_SAVE_INIT, article,eventBus.events.ARTICLE_SAVE_INIT);
            else
                eventBus.emit(eventBus.events.ARTICLE_SAVE_ERROR, article,eventBus.events.ARTICLE_SAVE_INIT);
            return;
        }
        var col = db.collection(config.output);
        col.insertOne(article.article,function (err, result) {
            eventBus.unQueued(eventBus.events.ARTICLE_SAVE_INIT);
            if (err) {
                if ((article.retries++) < config.maxRetries) //TODO: MOVE TO CONTROLER
                    eventBus.emitQueued(eventBus.events.ARTICLE_SAVE_INIT, article,eventBus.events.ARTICLE_SAVE_INIT);
                else
                    eventBus.emit(eventBus.events.ARTICLE_SAVE_ERROR, article,eventBus.events.ARTICLE_SAVE_INIT);
                db.close();
                return;
            }
            eventBus.emit(eventBus.events.ARTICLE_TOUCH_CACHE, article,eventBus.events.ARTICLE_SAVE_INIT);
            eventBus.emit(eventBus.events.ARTICLE_SAVED, article,eventBus.events.ARTICLE_SAVE_INIT);
            db.close();
        });
    });
}
