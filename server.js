var config = new require('./config.js');
var http =new require('http');
//http.globalAgent.maxSockets = 10;
setTimeout(function(){
    console.log("MAX EXECUTION TIME REACHED");
    process.exit();

},config.maxExecutionTime);

var rssprocessor=new require('./rssprocessor/controller.js');
rssprocessor.init();
