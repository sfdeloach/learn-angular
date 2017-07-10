
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  addToInactive() {
    this.inactiveCounter += 1;
  }

  addToActive() {
    this.activeCounter += 1;
  }

  getTotal(): number {
    return this.activeCounter + this.inactiveCounter;
  }

  printResults() {
    console.log(`
      Active Counter: ${this.activeCounter}
      Inactive Counter: ${this.inactiveCounter}
      Total: ${this.getTotal()}`
    );
  }
}
