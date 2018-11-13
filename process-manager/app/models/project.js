var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    _id: Number,
    name: {type: String, required: [true, 'Informe um nome para o projeto']},
    description: String,
    collaborators: [{type:mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}],
    process: [{type: mongoose.Schema.Types.ObjectId, ref: 'Process'}]
}, {
    timestamps: true
});

module.exports = function(){return mongoose.model('ProjectModel', ProjectSchema);}
