module.exports.findAll = function(application, req, res){
    application.app.models.task.find((err, tasks) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(tasks);
        }
    });
}

module.exports.index = function(application, req, res){
    application.app.models.task.find({process: req.params.process}, (err, tasks) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(tasks);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.task.findById(req.params.id, (err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(task);
        }
    });
}

module.exports.save = function(application, req, res){
    let task = new application.app.models.task(req.body);
    task.save((err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(task);
        }
    });
}

module.exports.update = function(application, req, res){
    application.app.models.task.findById(req.body.id, (err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            task.name = req.body.name
            task.description = req.body.description

            task.save((err, task) => {
                if(err){
                    res.status(400);
                    res.json(err);
                }else{
                    res.json(task);
                }
            });
        }
    });
}

module.exports.remove = function(application, req, res){
    application.app.models.task.findOneAndDelete({_id: req.body.id},(err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(task);
        }
    });
}
