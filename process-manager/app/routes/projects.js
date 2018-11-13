module.exports = function(application){
    application.get('/project', function(req, res){
       application.app.controllers.project.index(application, req, res);
    });

    application.get('/project/id/:id', function(req, res){
        application.app.controllers.project.find(application, req, res);
    });

    application.post('/project/add', function(req, res){
       application.app.controllers.project.save(application, req, res);
    });
    
    application.post('/project/update', function(req, res){
        application.app.controllers.project.update(application, req, res);
    });

    application.post('/project/remove', function(req, res){
       application.app.controllers.project.remove(application, req, res);
    });
}
