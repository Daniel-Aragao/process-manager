var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    collaborators: [{type:mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}],
    process: [{type: mongoose.Schema.Types.ObjectId, ref: 'Process'}]
}, {
    timestamps: true
});

module.exports = function(){return mongoose.model('ProjectModel', ProjectSchema);}
