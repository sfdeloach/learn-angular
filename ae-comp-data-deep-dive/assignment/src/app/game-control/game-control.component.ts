import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  count: number = 0;
  countToggle;
  @Output() countEmitter: EventEmitter<number> = new EventEmitter<number>();

  startCounter() {
    // conditional added to prevent clicks from creating multiple emitters
    if (!this.countToggle) {
      this.countToggle = setInterval(() => {
        this.countEmitter.emit(this.count);
        this.count += 1;
      }, 1000);
    }
  }

  stopCounter() {
    clearInterval(this.countToggle);
    this.countToggle = false; // open toggle to start again
  }

  isOdd(): boolean {
    return this.count % 2 === 1;
  }
}
