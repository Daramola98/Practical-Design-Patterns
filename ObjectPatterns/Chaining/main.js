var Calc =  function (start) {
    this.start = start;
    this.add = function (num) {
        this.start += num;
        return this
    };

    this.multiply = function (num) {
        this.start *= num;
        return this
    };

    this.equals = function (callback) {
        callback(this.start);
        return this;
    };
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
        console.log(result);
    });
