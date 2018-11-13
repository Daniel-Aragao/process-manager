var mongoose = require('mongoose');

var ToolSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,  
  description: String,
  process: {type: mongoose.Schema.Types.ObjectId, ref: 'Process', required: [true, 'Informe o código do processo']},
  task: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
},{
    timestamps: true
});

module.exports = function(){return mongoose.model('ToolModel', ToolSchema);}
