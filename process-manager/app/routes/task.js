module.exports = function(application){
    application.get('/task', function(req, res){
        application.app.controllers.task.findAll(application, req, res);
     });

    application.get('/task/:process', function(req, res){
       application.app.controllers.task.index(application, req, res);
    });

    application.get('/task/id/:id', function(req, res){
        application.app.controllers.task.find(application, req, res);
    });

    application.post('/task/add', function(req, res){
        application.app.controllers.task.save(application, req, res);
     });

     application.post('/task/update', function(req, res){
        application.app.controllers.task.update(application, req, res);
    });

    application.post('/task/remove', function(req, res){
       application.app.controllers.task.remove(application, req, res);
    });
}
