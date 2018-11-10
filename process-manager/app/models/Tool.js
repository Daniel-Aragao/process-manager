const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Process = require('./Process')
// const Task = require('./Task')

const Tool = mongoose.Schema({
  id: Number,
  name: String,
  process: Schema.ObjectId,
  task: [Schema.ObjectId]
}, {
    timestamps: true
});

module.exports = function(){
    return mongoose.model('Tool', Tool);;
}
