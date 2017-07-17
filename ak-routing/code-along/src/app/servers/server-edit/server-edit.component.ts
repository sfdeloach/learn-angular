import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

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

  constructor(
    private serversService: ServersService,
    private activatedRoue: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoue.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params.id);
      }
    );
  }

}
