var repo = {
    tasks: {},
    commands: [],
    get: function(id) {
        console.log("Getting task " + id);
        return {
            name: `new task ${id} from database`
        }
    },
    save: function(task) {
        repo.tasks[task.id] = task;
        console.log(`Saving ${task.name} to the database`);
    },
    replay: function () {
        repo.commands.forEach((command) => {
            repo.executeNoLog(command.name, command.obj);
        })
    }
};

repo.execute = function (name, ...args) {
    repo.commands.push({ name, obj: args[0] });

    if (repo[name]) {
        return repo[name].apply(repo, args);
    }
    return false;
};

repo.executeNoLog = function (name, ...args) {
    if (repo[name]) {
        return repo[name].apply(repo, args);
    }
    return false;
};

repo.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});

repo.execute('save', {
    id: 2,
    name: 'Task 2',
    completed: false
});

repo.execute('save', {
    id: 3,
    name: 'Task 3',
    completed: false
});

repo.execute('save', {
    id: 4,
    name: 'Task 4',
    completed: true
});

repo.execute('save', {
    id: 5,
    name: 'Task 5',
    completed: false
});

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);