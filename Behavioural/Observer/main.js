var Task = require('./task');

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}

var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
} 

var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
} 

var ObserverList = function () {
    this.observerList = [];
}

ObserverList.prototype.add = function (subject) {
    this.observerList.push(subject);
}

ObserverList.prototype.get = function (index) {
    if(index && index < this.observerList.length){
        return this.observerList[index];
    }
    return null;
}

var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

ObservableTask.prototype.notify = function (context) {
    this.observers.observerList.forEach((observer) => {
        observer(context);
    })
}

ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}

var task1 = new ObservableTask({ name: 'Create a demo for observers', user: 'Daramola' });
var notify = new notificationService();
var log = new loggingService();
var audit = new auditingService();

task1.addObserver(notify.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);

task1.save();