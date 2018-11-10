const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Collaborator = mongoose.Schema({
    name: String,
    matricula: String,
    process: [Schema.ObjectId],
    projects: Schema.ObjectId
}, {
    timestamps: true
});

module.exports = function(){
    return mongoose.model('Collaborator', Collaborator);;
}
