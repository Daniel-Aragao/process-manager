var mongoose = require('mongoose');

var ProcessSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    team: [{type:mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}],
    project: {type:mongoose.Schema.Types.ObjectId, ref: 'Project', required: [true, 'Informe o código do projeto']},
    description: String,
    artifact: [{type:mongoose.Schema.Types.ObjectId, ref: 'Artifact'}],
    tasks: [{type:mongoose.Schema.Types.ObjectId, ref: 'Task'}],
    tools: [{type:mongoose.Schema.Types.ObjectId, ref: 'Tool'}]
}, {
    timestamps: true
});

module.exports = function(){ return mongoose.model('ProcessModel', ProcessSchema);}

/**
var process = new Process({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    equipe: [{req.equipe1._id}, {req.equipe2._id}],
    projeto:[{req.project1._id}, {req.project._id}],
    description: req.body.description,
    artifact:[{req.artifact1._id}, {req.artifact2._id}],
    tasks:[{req.task1._id}, {req.task2._id}],
    tools:[{req.tool1._id}, {req.tool2._id}]
});
*/
