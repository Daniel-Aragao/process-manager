module.exports.index = function(application, req, res){
    application.app.models.artifact.find((err, artifacts) => {
        if(err){
            console.log(err);
        }else{
            res.json(artifacts);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.artifact.findById(req.params.id, (err, artifacts) => {
        if(err){
            console.log(err);
        }else{
            res.json(artifacts);
        }
    });
}

module.exports.save = function(application, req, res){
    let artifact = new application.app.models.artifact(req.body);
    artifact.save((err, artifacts) => {
        if(err){
            console.log(err);
        }else{
            res.json(artifacts);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.artifact.findById(req.body.id, (err, artifacts) => {
        if(err){
            console.log(err);
        }else{
            artifacts.name = req.body.name
            artifacts.eTypeArtifact = req.body.eTypeArtifact
            artifacts.details = req.body.details

            artifacts.save((err, artifact) => {
                if(err){
                    console.log(err);
                }else{
                    res.json(artifacts);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.artifact.findByIdAndRemove({_id: req.body.id},(err, artifacts) => {
        if(err){
            console.log(err);
        }else{
            res.json(artifacts);
        }
    });
}
