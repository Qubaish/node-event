require('log-timestamp');
/**
 * Created by sergiomonteiro on 08/02/2017.
 */
module.exports = {
    mongoSrv: (process.env.MONGO_SERVER || "127.0.0.1"),
    mongoPort: (process.env.MONGO_PORT || "27017"),
    mongoDb: (process.env.MONGO_DB || "pipeline"),

    outletid: 193504,
    flushSave : (process.env.FLUSH_SAVE || 100),
    maxRetries : (process.env.MAX_RETRIES || 5),
    srvApiHost : (process.env.BODHI_API || "http://localhost"),
    srvApiPort : (process.env.BODHI_API_PORT || "3000"),
    srvApiPath : (process.env.BODHI_API_PATH || "/api/v1/outlets/burrellesluce" ),


    srvApiProjectHost : (process.env.BODHI_API_PROJECTS_HOST || 'http://localhost'),
    srvApiProjectPort :(process.env.BODHI_API_PROJECTS_PORT || '3000') ,
    srvApiProjectPath :(process.env.BODHI_API_PROJECTS_PATH || '/api/v1/projects/burrellesluce') ,

    srvApiToken : (process.env.BODHI_API_PATH || "Token token=IbDUI6k6B842wEdSV14471rL3n091ar7"),
    httpTimeout: 300000,

    historyCollection : (process.env.HISTORY_COLLECTION || "cyberwatch_history"),
    debug: false,
    output : (process.env.OUTPUT || "searched"),
    tickTime: (process.env.tickTime || 1000),
    maxSockets: (process.env.maxSockets || 10),
    minTimeReqInterval: (process.env.minTimeReqInterval || 100),
    maxNRequests: (process.env.maxNRequests || 10),
    memCacheServer: (process.env.memCacheServer || '127.0.0.1'),
    maxExecutionTime: 1800000,
}
