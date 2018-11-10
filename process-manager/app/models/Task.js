const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Process = require('./Process')
// const Artifact = require('./Artifact')
// const Collaborator = require('./Collaborator');
// const ETypeTask = require('../enums/ETypeTask');

const Task = mongoose.Schema({
  name: String,
  details: String,
  artifact: [Schema.ObjectId],
  responsible: Schema.ObjectId,
  process: Schema.ObjectId,
  previousTask: [Schema.ObjectId],
  nextTask: [Schema.ObjectId],
  eTypeTask: Number,
  participants: [Schema.ObjectId]
}, {
    timestamps: true
});

module.exports = function(){
    return mongoose.model('Task', Task);;
}
