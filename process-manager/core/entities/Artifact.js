const Artifact = function(id, name, eTypeArtifact, details, task){
    this._id = id;
    this.Name = name;
    this.ETypeArtifact = eTypeArtifact;
    this.Details = details;
    this.Task = task;
}

module.exports = Artifact;
