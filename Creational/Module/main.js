var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task(Repo.get(2));

task1.complete();
task2.save();