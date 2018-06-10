/**
 * Created by sergiomonteiro on 21/02/2017.
 */
var config=require('../config.js');
var request = require('request');
var eventBus=require('./events.js');
var md5=require('md5');
var _=require('underscore');
var Memcached = require('memcached');
var memcached = new Memcached(config.memCacheServer, {retries:10,retry:10000});
Memcached.config.poolSize = 25;
var expireDate=864000; // 10 days
var minExpireDate=3600; //1 hours
eventBus.on(eventBus.events.ARTICLE_CHECK_HISTORY,function(article){
    checkHistoryArticle(article);
});

eventBus.on(eventBus.events.ARTICLE_TOUCH_CACHE,function(article){
	if(article.article.url)
		memcached.touch(md5(article.article.url), expireDate, function (err) {
			if(err)
				console.log("Error touching!");
		});
	
});


function checkHistoryArticle(article){
    memcached.get(md5(article.article_url),function(err,data){
        eventBus.unQueued(eventBus.events.ARTICLE_CHECK_HISTORY);
        if(err) {
            eventBus.emit(eventBus.events.ARTICLE_ERROR, article.id);
            return;
        }

        var newProjects=article.article_project_id;

        if(!data)
            data=[];
        var newCacheData=_.union(data,newProjects);

        newProjects=_.difference(newProjects,data);



        if(newProjects.length&&newCacheData.length){

            memcached.set(md5(article.article_url), Object.values(newCacheData),minExpireDate,function (err) {
                if(err){
                    eventBus.emit(eventBus.events.ARTICLE_ERROR,article.id);
                }else{
                    eventBus.emit(eventBus.events.ARTICLE_CHECK_HISTORY_PROCESSED,{article: article, newProjects: newProjects});
                }
            });
        }else
            eventBus.emit(eventBus.events.ARTICLE_CHECK_HISTORY_PROCESSED,{article: article, newProjects: []});
    });
}
