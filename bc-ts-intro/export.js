"use strict";
exports.__esModule = true;
var Car = (function () {
    function Car(engineName, gears, speed) {
        this.speed = speed || 0;
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
}());
exports.Car = Car;
var Truck = (function () {
    function Truck(engineName, gears, speed) {
        this.speed = speed || 0;
    }
    Truck.prototype.accelerate = function () {
        this.speed++;
    };
    Truck.prototype.throttle = function () {
        this.speed--;
    };
    Truck.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Truck.numberOfWheels = function () {
        return 4;
    };
    return Truck;
}());
exports.Truck = Truck;
