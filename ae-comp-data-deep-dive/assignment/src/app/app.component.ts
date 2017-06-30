import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  numberReceived(number) {
    if (number % 2 === 1) {
      this.oddNumbers.push(number);
    } else {
      this.evenNumbers.push(number);
    }
  }
}
