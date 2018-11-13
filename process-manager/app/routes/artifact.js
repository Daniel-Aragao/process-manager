module.exports = function(application){
    application.get('/artifact', function(req, res){
       application.app.controllers.artifact.index(application, req, res);
    });

    application.get('/artifact/:id', function(req, res){
        application.app.controllers.artifact.find(application, req, res);
    });

    application.post('/artifact/add', function(req, res){
       application.app.controllers.artifact.save(application, req, res);
    });

    application.post('/artifact/update', function(req, res){
        application.app.controllers.artifact.update(application, req, res);
    });

    application.post('/artifact/remove', function(req, res){
       application.app.controllers.artifact.remove(application, req, res);
    });
}
