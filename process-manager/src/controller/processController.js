exports.findByName = function (arrayProcess, name) {
  return arrayProcess.find(function(item) {
    return item.Name === name;
  });
}

exports.findById = function (arrayProcess, name) {
  return arrayProcess.find(function(item) {
    return item._id === item;
  });
}
