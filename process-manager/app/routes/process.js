module.exports = function(application){
    application.get('/process/list', function(req, res){
        application.app.controllers.process.index(application, req, res);
    });
}