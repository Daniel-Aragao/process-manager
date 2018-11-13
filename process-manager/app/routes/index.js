module.exports = function(application){
    application.get('/', function(req, res){
       application.app.controllers.process.index(application, req, res);
    });
}
