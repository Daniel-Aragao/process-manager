const Process = function (name, id, team, project, descricao, artifact, task, tool){
    this.Name = name;
    this._id = id;
    this.Team = team;
    this.Project = project;
    this.Descricao = descricao;
    this.Artifact = artifact;
    this.Task = task;
    this.Tool = tool;
}

module.exports = Process;
