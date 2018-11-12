module.exports.index = function(application, req, res){
    // console.log(application.app.models)
    application.app.models.process.find((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });

    application.app.models.process.save((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });

    application.app.models.process.remove((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });

    application.app.models.process.update((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });
}
