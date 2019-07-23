var userRepo = function () {
    var get = function(id) {
        console.log("Getting user " + id);
        return {
            name: `Daramola Ajiboye`
        }
    };

    return {
        get,
    }
}

module.exports = userRepo();