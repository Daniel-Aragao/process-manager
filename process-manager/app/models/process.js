var mongoose = require('mongoose');

var ProcessSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('ProcessModel', ProcessSchema);
