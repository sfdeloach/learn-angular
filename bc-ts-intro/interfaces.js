var _this = this;
var Ford = (function () {
    function Ford(engineName, gears, speed) {
        this.engineName = engineName;
        this.gears = gears;
        this.speed = speed;
    }
    Ford.prototype.accelerate = function () {
        this.speed++;
    };
    Ford.prototype.throttle = function () {
        this.speed--;
    };
    Ford.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Ford.numberOfWheels = function () {
        return 4;
    };
    return Ford;
}());
// Instantiate an object from class
var ford = new Ford("Hemi", 5, 55);
var dodge = {
    engineName: 'small block',
    gears: 4,
    speed: 65,
    accelerate: function () { return _this.speed++; },
    throttle: function () { return _this.speed--; },
    getSpeed: function () { return console.log(_this.speed); }
};
ford.accelerate();
ford.accelerate();
ford.throttle();
console.log(Ford.numberOfWheels());
console.log("ford: " + JSON.stringify(ford));
console.log("dodge: " + JSON.stringify(dodge));
