export class Car {
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

export class Truck {
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
