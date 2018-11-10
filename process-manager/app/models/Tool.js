const mongoose = require('mongoose');
const Process = require('./Process')
const Task = require('./Task')

const Tool = mongoose.Schema({
  id: Number,
  name: String,
  process: [Process],
  task: [Task]
}, {
    timestamps: true
});

module.exports = function(){
    return module.exports = mongoose.model('Tool', Tool);;
}
