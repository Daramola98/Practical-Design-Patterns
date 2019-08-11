var Task = function (data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(data.priority, data.completed, data.project, data.user);
    // this.priority = data.priority;
    // this.completed = data.completed;
    // this.project = data.project;
    // this.user = data.user;
}

var Flyweight = function (priority, completed, project, user) {
    this.priority = priority;
    this.completed = completed; 
    this.project = project;
    this.user = user;
}

var FlyweightFactory = function () {
    var flyweights = {};
    var get = function (priority, completed, project, user) {
        var key = priority + completed + project + user;
        if (!flyweights[key]) {
            flyweights[key] = new Flyweight(priority, completed, project, user);
        }
        return flyweights[key];

    }

    var getCount = function () {
        return Object.keys(flyweights).length;
    }

    return {
        get,
        getCount
    }
}();

function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    }
    var get = function (name) {
        return tasks[name];
    }
    var getCount = function () {
        return count;
    }

    return {
        add,
        get,
        getCount,
    };
}

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;
for (var i = 0; i < 1000000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    })
}

var afterMemory = process.memoryUsage().heapUsed;
console.log('Used memory ' + (afterMemory - initialMemory) / 1000000)

console.log("tasks: " + tasks.getCount());
console.log("flyweights: " + FlyweightFactory.getCount());