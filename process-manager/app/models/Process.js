const mongoose = require('mongoose');
const Collaborator = require('./Collaborator');

const Process = mongoose.Schema({
    name: String,
    equipe: [Collaborator],
    projeto: String,
    description: String,
    artifacts: String,
    activities: String
});

module.exports = function(){
    return module.exports = mongoose.model('Process', Process);;
}