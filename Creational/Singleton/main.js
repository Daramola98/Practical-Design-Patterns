var taskHandler = require('./taskHandler');
var myRepo = require('./Repo');

myRepo.save('From Main');
myRepo.save('From Main');
myRepo.save('From Main');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();