var taskRepo = require('./taskRepository');

var Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
    taskRepo.save(this);

}

Task.prototype.save = function(){
    console.log('Saving Task ' + this.name);
    taskRepo.save(this);
}

module.exports = Task;