var mongoose = require('mongoose');

var ArtifactSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: String,
  eTypeArtifact: {type: String, enum: ['GUIA','CODIGO']},
  details: String,
  process: {type: mongoose.Schema.Types.ObjectId, ref: 'Process', required: [true, 'Informe o código do processo']},
  tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
}, {
    timestamps: true
});

module.exports = function(){return mongoose.model('ArtifactModel', ArtifactSchema);}
