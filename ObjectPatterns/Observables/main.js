var Book = function (name, price) {
    this.priceChanging = [];
    this.priceChanged = [];
    this.name = function (val) {
        if (!val || val === name) {
          return name;    
        }
        name = val;
        return name; 
    }

    this.price = function (val) {
        if (!val || val === price) {
          return price
        }

        this.priceChanging.forEach((callback, index) => {
            if (!callback(this, val)) {
                return price;
            }
            price = val;
            this.priceChanged.forEach((callback) => {
                callback(this);
            });
          });
          return price;
    }

    this.onPriceChanging = function (callback) {
        this.priceChanging.push(callback);
    }

    this.onPriceChanged = function (callback) {
        this.priceChanged.push(callback);
    }
}

var book = new Book('Clean Code', 45);

book.onPriceChanging(function (bookObj, val) {
    if (val > 100) {
        console.log('Book price is too high error occured');
        return false;
    }
    return true;
});

book.onPriceChanged(function (bookObj) {
    console.log(`Notice the price of ${bookObj.name()} has changed to ${bookObj.price()}`);
});

book.price(50);
book.price(70);
book.price(150);