import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';
  alwaysTrue = true;
  alwaysFalse = false;
  erraticText = "black";
  color = "purple";
  background = "gray";
  clickCount = 0;
  emailAddress = '';

  constructor() {
    setInterval(() => {
      if (this.erraticText === 'white') {
        this.erraticText = 'black';
      } else {
        this.erraticText = 'white';
      }
    }, 1000);

    setInterval(() => {
      if (this.erraticText === 'white') {
        this.erraticText = 'black';
      } else {
        this.erraticText = 'white';
      }
    }, 1333);

    setInterval(() => {
      if (this.erraticText === 'white') {
        this.erraticText = 'black';
      } else {
        this.erraticText = 'white';
      }
    }, 1500);
  }

  getAlwaysTrue() {
    return this.alwaysTrue;
  }

  onAddBtn(number: number): void {
    number === 0 ? this.clickCount = 0 : this.clickCount += number;
  }

  onEmailKeypress(event: KeyboardEvent): void {
    this.emailAddress = (<HTMLInputElement>event.target).value;
  }
}
