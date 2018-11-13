var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,
  details: String,
  artifact: [{type: mongoose.Schema.Types.ObjectId, ref: 'Artifact'}],
  participants: [{type:mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}],
  process: {type: mongoose.Schema.Types.ObjectId, ref: 'Process'},
  previousTask: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
  nextTask: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
  eTypeTask: {type: String, enum: ['TAREFA','INICIO','PARADA','GATEWAY']},
  responsible: {type: mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}
}, {
    timestamps: true
});

module.exports =  function(){return mongoose.model('TaskModel', TaskSchema);}
