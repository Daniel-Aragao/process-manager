const mongoose = require('mongoose');
const Process = require('./Process')
const Artifact = require('./Artifact')
const Task = require('./Task')
const Collaborator = require('.Collaborator');
const ETypeTask = require('../app/enums/ETypeTask');

const Task = mongoose.Schema({
  name: String,
  details: String,
  artifact: [Artifact],
  responsible: Collaborator,
  process: Process,
  previousTask: [Task],
  nextTask: [Task],
  eTypeTask: ETypeTask,
  participants: [Collaborator]
}, {
    timestamps: true
});

module.exports = function(){
    return module.exports = mongoose.model('Task', Task);;
}
