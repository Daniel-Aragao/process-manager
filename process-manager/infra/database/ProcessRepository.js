var dbService = require('./database');

let connectTo = {};
connectTo.process = dbService.requestConnector("Process");

let insertProcess = function(process, cb){
    connectTo.process(function(processCollection){
        
    });
}