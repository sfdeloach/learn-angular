export class Pythagalog {
  type: string;
  timestamp: Date;
  a: number;
  b: number;
  c: number;

  constructor(type: string, timestamp: Date, a: number, b: number, c: number) {
    this.type = type;
    this.timestamp = timestamp;
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
