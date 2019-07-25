var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('Completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name)
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('Notifying Important People');
}

UrgentTask.prototype.save = function () {
    this.notify();
    console.log('Do some special stuff before saving');
    Task.prototype.save.call(this);
}

var ut = new UrgentTask('Finish SubFooter', 2);
ut.save()