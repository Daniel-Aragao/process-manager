exports.findByName = function (arrayProject, name) {
  return arrayProject.find(function(item) {
    return item.Name === name;
  });
}

exports.findById = function (arrayProject, id) {
  return arrayProject.find(function(item) {
    return item._id === id;
  });
}
