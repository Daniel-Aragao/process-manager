const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Process = require('./Process')
const Collaborator = require('./Collaborator')

const Project = mongoose.Schema({
    name: String,
    id: Number,
    collaborators: [Schema.ObjectId]
}, {
    timestamps: true
});

module.exports = function(){
    return mongoose.model('Project', Project);;
}
