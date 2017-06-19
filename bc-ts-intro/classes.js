var Car = (function() {
  function Car(engineName, gears, speed) {
    this.speed = speed || 0;
  }
  Car.prototype.accelerate = function() {
    this.speed++;
  };
  Car.prototype.throttle = function() {
    this.speed--;
  };
  Car.prototype.getSpeed = function() {
    console.log(this.speed);
  };
  Car.numberOfWheels = function() {
    return 4;
  };
  return Car;
}());
// Instantiate an object from class
var car = new Car("Hemi", 5, 55);
car.accelerate();
car.throttle();
console.log(Car.numberOfWheels());
