var Task = function (data) {
    this.name = data.name;
    this.completed = data.completed;
    this.priority = data.priority;
    this.user = data.user;
    this.project = data.project;
}

var TaskService = function () {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('Completing task: ' + task.name);
        },
        setCompletionDate: function(task) {
            task.completedDate = new Date();
            console.log(task.name + 'completed on' + task.completedDate);
        },
        notifyCompletion: function(task, user) {
            console.log('Notifying' + user + 'of the completion of '+ task.name);
        },
        save: function(task) {
            console.log('Saving task: '+ task.name);
        }
    }
}();

var TaskServiceWrapper = function () {

    var completeAndNotify = function (task) {
        TaskService.complete(task);
        if (task.completed === 'true') {
            TaskService.setCompletionDate(task);
            TaskService.notifyCompletion(task);
            TaskService.save(task);
        }
    }

    return {
        completeAndNotify
    };
}();

var myTask = new Task(
    {
        name: 'Patterns',
        priority: 2,
        project: 'Courses',
        user: 'Jon',
        completed: false,
    }
)

TaskServiceWrapper.completeAndNotify(myTask);

module.exports = Task;