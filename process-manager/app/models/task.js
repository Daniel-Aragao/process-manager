var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,
  eTypeTask: {type: String, enum: ['Tarefa','Inicio','Parada','Gateway']},
  description: String,
  responsible: {type: mongoose.Schema.Types.ObjectId, ref: 'Collaborator'},
  
  participants: [{type:mongoose.Schema.Types.ObjectId, ref: 'Collaborator'}],
  process: {type: mongoose.Schema.Types.ObjectId, ref: 'Process', required: [true, 'Informe o código do processo']},

  previousTask: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
  nextTask: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]  
}, {
    timestamps: true
});

module.exports =  function(){return mongoose.model('TaskModel', TaskSchema);}
