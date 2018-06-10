/**
 * Created by sergiomonteiro on 21/02/2017.
 */

var config = new require('../config.js');
var Languages = require('../types/languages.js');
var ISO3166 = require('../types/ISO3166.js');
var languages = new Languages();
var parser = require('xml2json');
var htmlToText = require("html-to-text");

module.exports = function Item(xml, projectId) {

    var beginning_of_month = function () {
        var dt = new Date();
        dt.setDate(1);
        return dt;
    }

    var now = function () {
        return new Date();
    }

    var getValue = function (xml, nodeName) {

        var i1 = xml.indexOf("<" + nodeName + ">");
        if (i1 <= 0) {
            return null;
        }
        var i2 = xml.indexOf("</" + nodeName + ">");
        var value = xml.substring(i1 + nodeName.length + 2, i2);
        value = value.replace("<![CDATA[", "");
        value = value.replace("]]>", "");
        return value.trim();
    };


    var relevancy=[];
       for(let j=0;j<projectId.length;j++){
            relevancy[j]={
            project_id: projectId[j],
            lucene: "",
            query: "",
            hits: ""
        }
    }

    var clippings = [];
    clippings.push({remote_asset_url: getValue(xml, "content_url")});


    var current_circulation = {};
    current_circulation.created_at = now();
    current_circulation.updated_at = now();
    current_circulation.start_date = beginning_of_month();
    current_circulation.circulation_type = "Monthly";
    var content = getValue(xml, "body");
    this.getOutput = function () {
        var ret = {
            id: getValue(xml, "id"),
            published_at: getValue(xml, "content_date"),
            pipeline_created_at: now(),
            pipeline_updated_at: now(),
            _version: 1,
            provider: "burrellesluce",
            processed_by:"burrellesluce",
            search_type: "burrellesluce",
            coverage: "client",
            front_page: false,
            press_release: false,
            industries: ["government"],
            processed_by: "burrellesluce",
            section: "wire",
            impression: 0,
            ave: 0,
            article_language: "en",
            headline: getValue(xml, "title"),
            article_id: getValue(xml, "content_url"),
            url: "",
            clippings: clippings,
            word_count: content.split(/\s+/).length,
            content_plain: content,
            summary: getValue(xml, 'content_summary'),
            media_type: getValue(xml, 'media_type'),
            media_subtype: "Newspaper",
            outlet_url: "",
            outlet_language: "en",
            outlet_name: getValue(xml, 'outlet'),
            outlet: getValue(xml, 'outlet'),
            outlet_location: "us",
            current_circulation: current_circulation,
            projects: projectId,
            relevancy: relevancy,
            outlet_id: config.outletid,
            page_number: 1
        }
        return ret;
    }

}
