module.exports = function(application){
    application.get('/tool/all', function(req, res){
        application.app.controllers.tool.findAll(application, req, res);
     });

    application.get('/tool/:process', function(req, res){
       application.app.controllers.tool.index(application, req, res);
    });

    application.get('/tool/id/:id', function(req, res){
        application.app.controllers.tool.find(application, req, res);
    });

    application.post('/tool/add', function(req, res){
        application.app.controllers.tool.save(application, req, res);
     });

     application.post('/tool/update', function(req, res){
        application.app.controllers.tool.update(application, req, res);
    });

    application.post('/tool/remove', function(req, res){
       application.app.controllers.tool.remove(application, req, res);
    });
}
