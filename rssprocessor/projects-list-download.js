var config=require('../config.js');
var request = require('request');
var eventBus=require('./events.js');
request.initParams.maxSockets = 20;


module.exports= {
    load: function () {
        var buffer = '';
        var uri = config.srvApiProjectHost+":"+config.srvApiProjectPort+config.srvApiProjectPath;
        var req = request({
            uri: uri,
            method: 'GET',
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
            eventBus.emit(eventBus.events.PROJECT_ERROR, {projectList: []});
            console.log("[Project List] error response:", e); //TODO: Review status code
        });

        req.on('end', function () {
            if (req.response.statusCode > 302) {
                eventBus.emit(eventBus.events.PROJECT_ERROR, {projectList: []});
            } else {
                var json_buffer=JSON.parse(buffer);
                eventBus.emit(eventBus.events.PROJECTS_LOADED, json_buffer);
                buffer = null;
            }
        });
        req.end();
        return;
    }
}