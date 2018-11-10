const mongoose = require('mongoose');
const ETypeArtifact = require('../app/enums/ETypeArtifact')
const Task = require('./Task')

const Artifact = mongoose.Schema({
    id: Number,
  name: String,
  eTypeArtifact: ETypeArtifact,
  details: String,
  tasks: [Task]
}, {
    timestamps: true
});

module.exports = function(){
    return module.exports = mongoose.model('Artifact', Artifact);;
}
