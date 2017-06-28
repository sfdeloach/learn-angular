import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Pythagalog } from '../pythagalog';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('pythagaClick') logCreated:
    EventEmitter<Pythagalog> = new EventEmitter<Pythagalog>();
  a: number = 3;
  b: number = 4;

  constructor() { }

  ngOnInit() {
  }

  calculate(): number {
    return Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
  }

  onAddLog(typeReceived: string): void {
    this.logCreated.emit(new Pythagalog(typeReceived, new Date(),
      this.a, this.b, this.calculate()));
  }
}
