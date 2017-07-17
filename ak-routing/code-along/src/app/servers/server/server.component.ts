import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Server } from '../../shared/server.model'
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serversService: ServersService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params.id);
      }
    );
  }

  onEditServer() {
    this.router.navigate(['/servers', this.server.id, 'edit']);
  }
}
