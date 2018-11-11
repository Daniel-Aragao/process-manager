module.exports.index = function(application, req, res){
    application.app.models.Process.find((err, processes) => {
        if(err){
            console.log(err);
        }else{
            res.json(processes);
        }
    });
}