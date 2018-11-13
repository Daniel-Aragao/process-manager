var mongoose = require('mongoose');

var CollaboratorSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: String,
    matricula: String,
    process: [{type: mongoose.Schema.Types.ObjectId, ref: 'Process'}],
    projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}]
}, {
    timestamps: true
});

module.exports = function(){return mongoose.model('CollaboratorModel', CollaboratorSchema);}
