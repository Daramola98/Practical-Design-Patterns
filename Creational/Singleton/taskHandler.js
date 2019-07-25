var myRepo = require('./Repo');

var taskHandler = function () {
    var save = function (task) {
        myRepo.save('Hi from task handler');

    }
    return {
        save
    };
}

module.exports = taskHandler();