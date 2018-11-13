module.exports.index = function(application, req, res){
    application.app.models.process.find((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.process.findById(req.params.id, (err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });
}

module.exports.save = function(application, req, res){
    let process = new application.app.models.process(req.body);
    process.save((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.process.findById(req.body.id, (err, processes) => {
        if(err){
            console.log(err);
        }else{
            processes.name = req.body.name
            processes.description = req.body.description

            processes.save((err, processes) => {
                if(err){
                    console.log(err);
                }else{
                    res.json(processes);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.process.findByIdAndRemove({_id: req.body.id},(err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });
}
