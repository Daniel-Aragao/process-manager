let mongoclient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017/process-manager';

mongoclient.connect(url, function(err, db){
    if(!err){
        console.log("Connected");
        db.close();
    }
    console.error(err);
});

var requestConnector = function(collectionName){
    return function (executionFunc){
        mongoclient.connect(url, function(err, db){
            if(!err){
                executionFunc(db.collection(collectionName));
                db.close();
            }else{
                console.error(err);
            }
        });
    };
}

module.exports = {requestConnector};