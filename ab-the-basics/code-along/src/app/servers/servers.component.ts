import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', // attribute selector
  templateUrl: './servers.component.html',  // template or templateUrl must be present
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverList: string[] = ['Skywalker', 'Solo'];
  serverName: string = '';

  constructor() { }

  addServer(): void {
    this.serverList.push(this.serverName);
  }

  ngOnInit() {
  }

}
