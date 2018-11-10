const mongoose = require('mongoose');
const Collaborator = require('./Collaborator');
const Artifact = require('./Artifact');
const Task = require('./Task');
const Tool = require('./Tool');

const Process = mongoose.Schema({
    name: String,
    equipe: [Collaborator],
    projeto: Project,
    description: String,
    artifacts: [Artifact],
    activities: [Task],
    tools: [Tool]
});

module.exports = function(){
    return module.exports = mongoose.model('Process', Process);;
}
