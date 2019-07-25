var Task = require('./task');

var task1 = new Task('Create demo for constructors');
var task2 = new Task('Create demo for modules');

task1.complete();
task2.save();