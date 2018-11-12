module.exports = function(application){
    application.get('/process/list', function(req, res){
       application.app.controllers.process.index(application, req, res);
    });

    application.post('/process/add', function(req, res){
       application.app.controllers.process.index(application, req, res);
    });

    application.post('/process/remove', function(req, res){
       application.app.controllers.process.index(application, req, res);
    });

    application.patch('/process/update', function(req, res){
       application.app.controllers.process.index(application, req, res);
    });
}
