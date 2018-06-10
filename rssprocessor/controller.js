/**
 * Created by sergiomonteiro on 19/02/2017.
 */
var config=require('../config.js');
var eventBus=require('./events.js');
var projectList=require('./projects-list-download.js');
require('./rss-download.js');
require('./xml-parser.js');
require('./articles-history.js');
require('./outlet-upsert.js');
require('./save-articles');
var feeds=[];//Feeds to process
var queueArticlesSave=[]; //Articles to save


function checkStatus(){

    var feedsInit=0;
    var feedsLoading=0;
    var feedsDone=0;
    var feedsParsing=0;
    var feedsProcessing=0;
    var feedsError=0;

    var feedsTotalArticles=0;
    var feedsTotalProcessed=0;
    var feedsTotalExists=0;

    var articlesUpsert=0;
    var articlesToSave=0;
    var articlesSaved=0;
    var articlesError=0;

    for(var i=0;i<feeds.length;i++){
        switch(feeds[i].status){
            case 'Init': feedsInit++;break;
            case 'Loading': feedsLoading++;break;
            case 'Done': feedsDone++;break;
            case 'Processing': feedsProcessing++;break;
            case 'Parsing': feedsParsing++;break;
            case 'Error': feedsError++;break;
        }
        feedsTotalArticles+=feeds[i].totalArticles;
        feedsTotalProcessed+=feeds[i].totalProcessed;
        feedsTotalExists+=feeds[i].totalExists;
        //if(feeds[i].status!='Init')
        if(config.debug==1&&feeds[i].status=='Init')
		console.log('[FEED]['+i+']['+feeds[i].status+'] Total Articles:',feeds[i].totalArticles,'Total Processed:',feeds[i].totalProcessed,'Total Exists:',feeds[i].totalExists,' '+feeds[i].url);
        if(config.debug==2)
		console.log('[FEED]['+i+']['+feeds[i].status+'] Total Articles:',feeds[i].totalArticles,'Total Processed:',feeds[i].totalProcessed,'Total Exists:',feeds[i].totalExists,' '+feeds[i].url);

    }

    for(var k=0;k<queueArticlesSave.length;k++){
        switch(queueArticlesSave[k].status){
            case 'UPSERT': articlesUpsert++;break;
            case 'TOSAVE': articlesToSave++;break;
            case 'SAVED': articlesSaved++;break;
            case 'ERROR': articlesError++;break;
        }
    }

    console.log('[FEEDS TOTAL]['+feeds.length+'] Init:',feedsInit,'Loading:',feedsLoading,'Parsing:',feedsParsing,'Processing:',feedsProcessing,'Error:',feedsError,'Done:',feedsDone);
    console.log('[ARTICLES TOTAL] Articles:',feedsTotalArticles,'Processed:',feedsTotalProcessed,'Exists:',feedsTotalExists,'Queued:',queueArticlesSave.length,'Upserting:',articlesUpsert,'ToSave:',articlesToSave,'Error:', articlesError,'Saved:',articlesSaved);

    if(feedsTotalArticles==feedsTotalProcessed && feedsTotalProcessed==(feedsTotalExists+articlesSaved+articlesError)&&feedsInit==0  && feedsLoading ==0){

	console.warn('FINISHED CYCLE!');
	process.exit(0);
    }
}

eventBus.on(eventBus.events.RSS_ERROR,function(data){
    if(data.retries++<config.maxRetries)
        eventBus.emit(eventBus.events.RSS_TO_PROCESS,{id: data.id, url: data.url, project_id: data.project_id, retries:data.retries});
    else{
        feeds[data.id].articles=[];
        feeds[data.id].status='Error';
    }
})

eventBus.on(eventBus.events.PROJECT_ERROR,function(data){
    process.exit();
})

eventBus.on(eventBus.events.RSS_LOADING,function(data){
    feeds[data.id].status='Loading';
});

eventBus.on(eventBus.events.RSS_LOADED,function(data){
    feeds[data.id].status='Parsing';
    eventBus.emit(eventBus.events.XML_TO_PROCESS,{id:data.id, project_id:feeds[data.id].project_id, xml:data.xml});
});

eventBus.on(eventBus.events.XML_PARSED,function(data){
    feeds[data.id].status='Processing';
    feeds[data.id].totalArticles=data.totalArticles;
    feeds[data.id].articles=data.articles;

    for(var k=0;k<feeds[data.id].articles.length;k++)
        eventBus.emitQueued(eventBus.events.ARTICLE_CHECK_HISTORY,{id: feeds[data.id].id,article_id: k, article_url: feeds[data.id].articles[k].id , article_project_id: feeds[data.id].articles[k].projects });
});

eventBus.on(eventBus.events.OUTLET_UPSERT_DONE,function(outlet){
    feeds[outlet.feed_id].articles[outlet.article_id].outlet_id=outlet.outlet_id;
    eventBus.emitQueued(eventBus.events.ARTICLE_SAVE_INIT,{ queueArticleSave_id: outlet.id, article: feeds[outlet.feed_id].articles[outlet.article_id], retries:0})
    queueArticlesSave[outlet.id].status='TOSAVE';
});

eventBus.on(eventBus.events.OUTLET_UPSERT_ERROR,function (data) {
    if(data.outlet.retries++<config.maxRetries)
        eventBus.emitQueued(eventBus.events.OUTLET_UPSERT_PROCESSING,data.outlet);
    else{
        queueArticlesSave[data.outlet.id].status='ERROR';
	console.log("ERROR OUTLET",data);
    }

})

eventBus.on(eventBus.events.ARTICLE_CHECK_HISTORY_PROCESSED,function(data){
    feeds[data.article.id].totalProcessed++;
    if(data.newProjects.length>0){
        feeds[data.article.id].articles[data.article.article_id].project_id=data.newProjects;
        var i = queueArticlesSave.length;

        queueArticlesSave.push({status: 'UPSERT', feed_id: data.article.id, article_id: data.article.article_id});
        feeds[data.article.id].totalQueued++;
        var article=feeds[data.article.id].articles[data.article.article_id];
        eventBus.emitQueued(eventBus.events.OUTLET_UPSERT_PROCESSING, {
            id:i,
            article_id: data.article.article_id,
            feed_id: data.article.id,
            outlet_name: article.outlet_name,
            outlet_url: article.outlet_url,
            impression: article.impression,
            outlet_language: article.outlet_language,
            outlet_location: article.outlet_location,
            retries:0,
        });
    }else {
        feeds[data.article.id].totalExists++;
    }

});

eventBus.on(eventBus.events.ARTICLE_SAVED,function(result){
    queueArticlesSave[result.queueArticleSave_id].status='SAVED';
});

/*
 * Event when a Project is loaded
 */
eventBus.on(eventBus.events.PROJECTS_LOADED,function(data){
    if(data.status != "None Found"){
        try{
            var keys = Object.keys(data);
            var values = Object.values(data);
            for(var i=0;i<keys.length&&i<100000000;i++){
                feeds.push(
                    {
                        id: i,
                        url: keys[i],
                        project_id: values[i],
                        totalArticles: 0,
                        totalProcessed: 0,
                        totalQueued: 0,
                        totalExists: 0,
                        status: 'Init'
                    }
                );
                eventBus.emitQueued(eventBus.events.RSS_TO_PROCESS,{id: feeds[i].id, url: feeds[i].url, project_id: feeds[i].project_id, retries:0});
            }
        }catch(e){
            console.error('Error processing feeds');
        }
        //Memory cleaning
        data=keys=values=null;
    }else{
        console.error('Project List Empty');
        process.exit();
    }
});


module.exports.init=function() {
    projectList.load();
    setInterval(function(){
        checkStatus();
    },5000);
    eventBus.eventQueue[eventBus.events.RSS_TO_PROCESS].maxParallel = 10;
    eventBus.eventQueue[eventBus.events.ARTICLE_CHECK_HISTORY].maxParallel = 20000;
    eventBus.eventQueue[eventBus.events.ARTICLE_SAVE_INIT].maxParallel = 100;
    eventBus.eventQueue[eventBus.events.OUTLET_UPSERT_PROCESSING].maxParallel = 5;
}
