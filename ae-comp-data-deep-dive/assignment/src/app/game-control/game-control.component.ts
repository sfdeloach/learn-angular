import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count: number = 0;
  counterToggle;

  constructor() { }

  ngOnInit() {

  }

  startCounter() {
    this.counterToggle = setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.counterToggle);
  }

}
