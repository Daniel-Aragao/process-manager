var mongoose = require('mongoose');

var ToolSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  process: {type: mongoose.Schema.Types.ObjectId, ref: 'Process'},
  task: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
},{
    timestamps: true
});

module.exports = function(){return mongoose.model('ToolModel', ToolSchema);}
