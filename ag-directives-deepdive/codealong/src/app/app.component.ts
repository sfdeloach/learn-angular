import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
  oddNumbers: boolean = false;

  toggleOdd(): void {
    this.oddNumbers = !this.oddNumbers;
  }

  getNumbers(option: string): number[] {
    if (option === 'odd') {
      let result: number[] = [];
      this.numbers.forEach((val) => {
        if (val % 2 !== 0) {
          result.push(val);
        }
      });
      return result;
    }
    return this.numbers;
  }
}
