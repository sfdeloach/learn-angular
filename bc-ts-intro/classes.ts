class Car {
  engineName: string;
  gears: number;
  private speed: number;

  constructor(engineName: string, gears: number, speed: number) {
    this.speed = speed || 0;
  }

  accelerate(): void {
    this.speed++;
  }

  throttle(): void {
    this.speed--;
  }

  getSpeed(): void {
    console.log(this.speed);
  }

  static numberOfWheels(): number {
    return 4;
  }
}

// Instantiate an object from class
let car = new Car("Hemi", 5, 55);
car.accelerate();
car.throttle();

console.log(Car.numberOfWheels());
