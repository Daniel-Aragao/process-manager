var mongoose = require('mongoose');

var CollaboratorSchema = new mongoose.Schema({
    name: String,
    matricula: String,
    process: [{type: mongoose.Schema.Types.ObjectId, ref: 'Process'}],
    projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Collaborator', CollaboratorSchema);
