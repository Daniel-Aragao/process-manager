const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Artifact = require('./Artifact');
const Task = require('./Task');
const Tool = require('./Tool');

const Process = mongoose.Schema({
    name: String,
    equipe: [Schema.ObjectId],
    projeto: Schema.ObjectId,
    description: String,
});

module.exports = function(){
    return mongoose.model('Process', Process);;
}
