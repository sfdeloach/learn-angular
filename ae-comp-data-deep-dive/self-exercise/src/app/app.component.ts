import { Component } from '@angular/core';

import { Pythagalog } from './pythagalog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs: {type: string, timestamp: Date, a: number, b: number, c: number}[] = [];

  log(evtData: Pythagalog): void {
    this.logs.push({
      type: evtData.type,
      timestamp: evtData.timestamp,
      a: evtData.a,
      b: evtData.b,
      c: evtData.c
    })
  }
}
