var repo = function () {
    var called = 0;

    var save = function (task) {
        called++;
        console.log(`Saving ${task} Called ${called} times`);
    }

    console.log('Newing up Repo');

    return {
        save
    }
}

module.exports = new repo;