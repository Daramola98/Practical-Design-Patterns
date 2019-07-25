var projectRepo = function () {
    var get = function(id) {
        console.log("Getting project " + id);
        return {
            name: `Building a Full Stack Web Application`
        }
    };

    return {
        get,
    }
}

module.exports = projectRepo();