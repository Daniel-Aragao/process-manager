const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ETypeArtifact = require('../enums/ETypeArtifact')
// const Task = require('./Task')

const Artifact = mongoose.Schema({
    id: Number,
  name: String,
  eTypeArtifact: Number,
  details: String,
  tasks: [Schema.ObjectId],
  process: Schema.ObjectId
}, {
    timestamps: true
});

module.exports = function(){
    return mongoose.model('Artifact', Artifact);;
}
