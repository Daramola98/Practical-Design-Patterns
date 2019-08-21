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

var mediator = (function() {
    var channels = { };

    var subscribe = function (channel, context, func) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({ 
          func, 
          context,
        })
    }

    var publish = function (channel, ...args) {
        if (!this.channels[channel]) {
            return false;
        }

        mediator.channels[channel].forEach((sub) => {
            sub.func.apply(sub.context, args);
        })

    }
    return {
        channels,
        subscribe,
        publish
    };
})();


var task1 = new Task({ name: 'Create a demo for mediators', user: 'Daramola' });
var notify = new notificationService();
var log = new loggingService();
var audit = new auditingService();

mediator.subscribe('complete', notify, notify.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function () {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
}

task1.complete();
