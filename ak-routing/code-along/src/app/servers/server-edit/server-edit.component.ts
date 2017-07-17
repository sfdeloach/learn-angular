import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Server } from '../../shared/server.model'
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {
  @ViewChild('serverName') name: ElementRef;
  @ViewChild('serverStatus') status: ElementRef;
  server: Server;
  serverStatusOptions: string[];

  constructor(private serversService: ServersService) { }

  ngOnInit() {

  }

}
