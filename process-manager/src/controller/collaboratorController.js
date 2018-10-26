exports.findByName = function (arrayCollaborator, name) {
  return arrayCollaborator.find(function(item) {
    return item.Name === name;
  });
}
