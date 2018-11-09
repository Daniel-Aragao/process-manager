const mongoose = require('mongoose');

const Collaborator = mongoose.Schema({
    name: String,
    registration: Number,    
}, {
    timestamps: true
});

module.exports = function(){
    return module.exports = mongoose.model('Collaborator', Collaborator);;
}