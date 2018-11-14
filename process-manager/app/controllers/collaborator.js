module.exports.findAll = function(application, req, res){
    application.app.models.collaborator.find((err, collaborators) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(collaborators);
        }
    });
}

module.exports.index = function(application, req, res){
    application.app.models.collaborator.find({process: req.params.process}, (err, collaborators) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(collaborators);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.collaborator.findById(req.params.id, (err, collaborators) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(collaborators);
        }
    });
}

module.exports.save = function(application, req, res){
    let collaborator = new application.app.models.collaborator(req.body);
    collaborator.save((err, collaborators) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(collaborators);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.collaborator.findById(req.body.id, (err, collaborators) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            collaborators.name = req.body.name
            collaborators.matricula = req.body.matricula

            collaborators.save((err, collaborators) => {
                if(err){
                    console.log(err);
                }else{
                    res.json(collaborators);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.collaborator.findOneAndDelete({_id: req.body.id},(err, collaborators) => {
        if(err){
          res.status(400);
          res.json(err);
        }else{
            res.json(collaborators);
        }
    });
}
