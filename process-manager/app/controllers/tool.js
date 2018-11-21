module.exports.findAll = function(application, req, res){
    application.app.models.tool.find((err, tasks) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(tasks);
        }
    });
}

module.exports.index = function(application, req, res){
    application.app.models.tool.find({process: req.params.process}, (err, tasks) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(tasks);
        }
    });
}

module.exports.find = function(application, req, res){
    application.app.models.tool.findById(req.params.id, (err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(task);
        }
    });
}

module.exports.save = function(application, req, res){
    let task = new application.app.models.tool(req.body);
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
    application.app.models.tool.findById(req.body._id, (err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            task.name = req.body.name;
            task.description = req.body.description;
            task.task = req.body.task;

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
    application.app.models.tool.findOneAndDelete({_id: req.body.id},(err, task) => {
        if(err){
            res.status(400);
            res.json(err);
        }else{
            res.json(task);
        }
    });
}
