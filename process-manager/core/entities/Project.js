const Project = function (name, id, manager, collaborator){
    this.Name = name;
    this._id = id;
    this.Manager = manager;
    this.Collaborator = collaborator;
}

module.exports = Project;
