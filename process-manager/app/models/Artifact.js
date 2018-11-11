var mongoose = require('mongoose');

var ArtifactSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  eTypeArtifact: {type: String, enum: ['GUIA','CODIGO']},
  details: String,
  tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Artifact', ArtifactSchema);
