const mongoose = require('mongoose');
const Process = require('./Process')
const Collaborator = require('./Collaborator')

const Project = mongoose.Schema({
    name: String,
    id: Number,
    process: [Process],
    collaborators: [Collaborator]
}, {
    timestamps: true
});

module.exports = function(){
    return module.exports = mongoose.model('Project', Project);;
}
