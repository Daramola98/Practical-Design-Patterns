var repo = function () {
    var get = function(id) {
        console.log("Getting task " + id);
        return {
            name: `new task ${id} from database`
        }
    };

    var save = function(task) {
        console.log(`Saving ${task.name} to the database`);
    };
    console.log("Creating a task repository");
    return {
        get,
        save
    }
}

module.exports = repo();