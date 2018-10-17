let Task = function (name, details, artifact, responsible, process, previousTask, nextTask, eTypeTask, participants){
    this.Name = name;
    this.Details = details;
    this.Artifact = artifact;
    this.Responsible = responsible;
    this.Process = process;
    this.PreviousTask = previousTask;
    this.NextTask = nextTask;
    this.ETypeTask = eTypeTask;
    this.Participants = participants;    
}

module.exports = Task;