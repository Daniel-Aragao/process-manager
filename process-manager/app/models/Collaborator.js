const mongoose = require('mongoose');
const Process = require('./Process')
const Project = require('./Project')

const Collaborator = mongoose.Schema({
    name: String,
    matricula: String,
    process: [Process],
    projects: [Project]
}, {
    timestamps: true
});

module.exports = function(){
    return module.exports = mongoose.model('Collaborator', Collaborator);;
}
