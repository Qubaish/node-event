/**
 * Created by sergiomonteiro on 21/02/2017.
 */
var Item=require('./item.js');
var eventBus=require('./events.js');


eventBus.on(eventBus.events.XML_TO_PROCESS,function(rssfeed){
    rssParser(rssfeed.xml,rssfeed.id,rssfeed.project_id);
});


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
    eventBus.emit(eventBus.events.XML_PARSED, {id:id, totalArticles: articles.length , articles: articles});
}