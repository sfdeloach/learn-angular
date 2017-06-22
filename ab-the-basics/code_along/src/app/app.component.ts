import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';
  disableButtonTimer = true;
  serverStatus = 'No server has been created.';
  serverName = '';
  alwaysTrue = true;
  alwaysFalse = false;
  erraticText = "black";
  color = "purple";
  background = "gray";
  clickCount = 0;
  emailInput = '';
  emailKeypress = '';
  validMessage = '';

  constructor() {
    setTimeout(() => {
      this.disableButtonTimer = false;
    }, 2000);

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

  updateServerName() {
    this.serverStatus = `Server was created! Name is ${this.serverName }`
  }

  onUpdateServerName(evt: Event): void {
    // console.log(evt.constructor.name);  // "Event"
    // console.log(evt.target.constructor.name); // "HTMLInputElement"
    let target = evt.target as HTMLInputElement; // object casting
    this.serverName = target.value;
  }

  getAlwaysTrue() {
    return this.alwaysTrue;
  }

  onAddBtn(number: number): void {
    number === 0 ? this.clickCount = 0 : this.clickCount += number;
  }

  onInput(event: Event): void {
    console.log(event);
    this.emailInput = (<HTMLInputElement>event.target).value;
    this.validMessage = (<HTMLInputElement>event.target).validationMessage;
  }

  onKeypress(event: KeyboardEvent): void {
    console.log(event);
    this.emailKeypress = (<HTMLInputElement>event.target).value;
  }
}
