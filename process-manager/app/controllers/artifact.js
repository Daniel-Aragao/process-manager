module.exports.findAll = function(application, req, res){
    application.app.models.artifact.find((err, artifacts) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(artifacts);
        }
    });
}

module.exports.index = function(application, req, res){
    application.app.models.artifact.find({process: req.params.process}, (err, artifacts) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(artifacts);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.artifact.findById(req.params.id, (err, artifacts) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(artifacts);
        }
    });
}

module.exports.save = function(application, req, res){
    let artifact = new application.app.models.artifact(req.body);

    artifact.save((err, artifact) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(artifact);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.artifact.findById(req.body._id, (err, artifact) => {
        if(err || artifact == null){
          res.status(400);
          res.json(err);
        }else{
            artifact.name = req.body.name
            artifact.eTypeArtifact = req.body.eTypeArtifact
            artifact.details = req.body.details
            artifact.tasks = req.body.tasks

            artifact.save((err, artifact) => {
                if(err){
                    res.status(400);
                    res.json(err);
                }else{
                    res.json(artifact);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.artifact.findByIdAndRemove({_id: req.body.id},(err, artifacts) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(artifacts);
        }
    });
}
