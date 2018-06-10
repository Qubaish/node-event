/**
 * Created by sergiomonteiro on 20/02/2017.
 */
var EventsManager=require('events');
var eventBus=new EventsManager();
var eventQueue=[];

setInterval(function(){
    var keys=Object.keys(eventQueue);

    for(var i=0;i<keys.length;i++){
        if(eventQueue[keys[i]].queue.length && eventQueue[keys[i]].maxParallel>eventQueue[keys[i]].running){
            eventQueue[keys[i]].running++;
            eventBus.emit(keys[i], eventQueue[keys[i]].queue.splice(0, 1)[0]);
        }
    }
},10);

var events= {
    INIT: 'init',

    RSS_TO_PROCESS: 'rssToProcess',
    RSS_ERROR: 'rssError',
    RSS_LOADING: 'rssLoading',
    RSS_LOADED: 'rssLoaded',

    XML_TO_PROCESS: 'xmlToProcess',
    XML_PARSED: 'xmlParsed',

    ARTICLE_CHECK_HISTORY: 'articleCheckHistory',
    ARTICLE_CHECK_HISTORY_ERROR: 'articleCheckHistoryError',
    ARTICLE_CHECK_HISTORY_PROCESSED: 'articleCheckHistoryProcessed',
    ARTICLE_TOUCH_CACHE: 'articleTouchCache',

    ARTICLE_PROCESSED: 'articlesProcessed',
    PROJECTS_LOADED: 'projectsLoaded',
    PROJECT_ERROR: 'projectsError',

    OUTLET_UPSERT_PROCESSING: 'outletUpsertProcessing',
    OUTLET_UPSERT_DONE: 'outletUpsertDone',
    OUTLET_UPSERT_ERROR: 'outletUpsertError',

    ARTICLE_SAVE_INIT: 'ArticleSaveInit',
    ARTICLE_SAVED: 'ArticleSaved',
    ARTICLE_SAVE_ERROR: 'ArticleSaveError',

}

function initBus(){
    var values=Object.values(events);
    for(var i=0;i<values.length;i++)
        eventQueue[values[i]]={queue:[], maxParallel: 10, running:0};
}

function on(type,callback){
    eventBus.on(type,callback);
}

function unQueued(type){
    if(eventQueue[type].running>0)
        eventQueue[type].running--;
}

function emit(type,data){
    eventBus.emit(type, data);
}

function emitQueued(type,data){
    if(eventQueue[type])
        eventQueue[type].queue.push(data);
}


initBus();

module.exports={
    events: events,
    emitQueued: emitQueued,
    emit: emit,
    on: on,
    unQueued: unQueued,
    eventQueue: eventQueue,
}

