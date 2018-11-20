module.exports.findAll = function(application, req, res){
    application.app.models.process.find((err, processes) => {
        if(err){
            console.log(err);
            res.status(400);
            res.json(err);
        }else{
            res.json(processes);
        }
    });
}

module.exports.index = function(application, req, res){
    application.app.models.process.find({project: req.params.project}, (err, processes) => {
        if(err){
            console.log(err);
            res.status(400);
            res.json(err);
        }else{
            res.json(processes);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.process.findById(req.params.id, (err, process) => {
        if(err){
            console.log(err);
            res.status(400);
            res.json(err);
        }else{
            if(process){
                application.app.models.artifact.find({process: process._id}, (err, artifacts) => {
                    if(err){
                        console.log(err);
                        res.status(400);
                        res.json(err);
                    }else{
                        let processObj = process.toObject();
                        processObj.artifacts = artifacts;

                        application.app.models.task.find({process: process._id}, (err, tasks) => {
                            processObj.tasks = tasks;
                            res.json(processObj);
                        });
                        
                    }
                });
            }else{
                res.json(process);                
            }            
        }
    });
}

module.exports.save = function(application, req, res){
    let process = new application.app.models.process(req.body);
    process.save((err, processes) => {
        if(err){
            console.log(err);
            res.status(400);
            res.json(err);
        }else{
            res.json(processes);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.process.findById(req.body._id, (err, processes) => {
        if(err || !processes){
            console.log(err);
            res.status(400);
            res.json(err);
        }else{
            processes.name = req.body.name
            processes.description = req.body.description

            processes.save((err, processes) => {
                if(err){
                    console.log(err);
                    res.status(400);
                    res.json(err);  
                }else{
                    res.json(processes);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.process.findOneAndDelete({_id: req.body.id},(err, processes) => {
        if(err){
            console.log(err);
            res.status(400);
            res.json(err);
        }else{
            res.json(processes);
        }
    });
}
