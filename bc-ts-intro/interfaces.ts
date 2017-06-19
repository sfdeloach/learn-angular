interface Car {
  engineName: string;
  gears: number;
  speed: number;

  accelerate(): void;
  throttle(): void;
  getSpeed(): void;
}

class Ford implements Car {
  engineName: string;
  gears: number;
  speed: number;

  constructor(engineName: string, gears: number, speed: number) {
    this.engineName = engineName;
    this.gears = gears;
    this.speed = speed;
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
let ford: Car = new Ford("Hemi", 5, 55);

let dodge: Car = {
  engineName: 'small block',
  gears: 4,
  speed: 65,
  accelerate: () => this.speed++,
  throttle: () => this.speed--,
  getSpeed: () => console.log(this.speed)
}

ford.accelerate();
ford.accelerate();
ford.throttle();

console.log(Ford.numberOfWheels());
console.log("ford: " + JSON.stringify(ford));
console.log("dodge: " + JSON.stringify(dodge));
