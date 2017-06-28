import { Component, OnInit, Input } from '@angular/core';

import { Pythagalog } from '../pythagalog';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  @Input('pythagaLogs') logs: Pythagalog[];

  constructor() { }

  ngOnInit() {
  }

}
