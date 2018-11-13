module.exports = function(application){
    application.get('/process', function(req, res){
       application.app.controllers.process.index(application, req, res);
    });

    application.get('/process/id/:id', function(req, res){
        application.app.controllers.process.find(application, req, res);
    });

    application.post('/process/add', function(req, res){
       application.app.controllers.process.save(application, req, res);
    });
    
    application.post('/process/update', function(req, res){
        application.app.controllers.process.update(application, req, res);
    });

    application.post('/process/remove', function(req, res){
       application.app.controllers.process.remove(application, req, res);
    });
}
