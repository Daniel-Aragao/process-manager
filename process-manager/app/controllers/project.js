module.exports.index = function(application, req, res){
    application.app.models.project.find((err, projects) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(projects);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.project.findById(req.params.id, (err, projects) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(projects);
        }
    });
}

module.exports.save = function(application, req, res){
    let project = new application.app.models.project(req.body);
    project.save((err, project) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(project);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.project.findById(req.body.id, (err, project) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            project.name = req.body.name
            project.description = req.body.description

            project.save((err, project) => {
                if(err){
                    res.status(400);
                    res.json(err);  
                }else{
                    res.json(project);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.project.findOneAndDelete({_id: req.body.id},(err, projects) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(projects);
        }
    });
}
