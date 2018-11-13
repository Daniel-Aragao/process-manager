module.exports = function(application){
    application.get('/collaborator', function(req, res){
       application.app.controllers.collaborator.index(application, req, res);
    });

    application.get('/collaborator/id/:id', function(req, res){
        application.app.controllers.collaborator.find(application, req, res);
    });

    application.post('/collaborator/add', function(req, res){
       application.app.controllers.collaborator.save(application, req, res);
    });

    application.post('/collaborator/update', function(req, res){
        application.app.controllers.collaborator.update(application, req, res);
    });

    application.post('/collaborator/remove', function(req, res){
       application.app.controllers.collaborator.remove(application, req, res);
    });
}
