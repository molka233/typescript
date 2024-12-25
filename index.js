var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var myCar = new Car("mercedes", "s", 2023);
console.log("Make: ".concat(myCar.make, ", Model: ").concat(myCar.model, ", Year: ").concat(myCar.year));
myCar.start();
