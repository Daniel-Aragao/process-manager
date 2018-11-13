var mongoose = require('mongoose');

var ProcessSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    equipe: [{type:mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}],
    projeto: {type:mongoose.Schema.Types.ObjectId, ref: 'Project'},
    description: String,
    artifact: [{type:mongoose.Schema.Types.ObjectId, ref: 'Artifact'}],
    tasks: [{type:mongoose.Schema.Types.ObjectId, ref: 'Task'}],
    tools: [{type:mongoose.Schema.Types.ObjectId, ref: 'Tool'}]
}, {
    timestamps: true
});

module.exports = function(){ return mongoose.model('ProcessModel', ProcessSchema);}


// var process = new Process({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     equipe: [{equipe1._id}, {equipe2._id}],
//     projeto:[{project1._id}, {project._id}],
//     description: req.body.description,
//     artifact:[{artifact1._id}, {artifact2._id}],
//     tasks:[{task1._id}, {task2._id}],
//     tools:[{tool1._id}, {tool2._id}]
// });
