import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';

import { Server } from '../../shared/server.model'
import { ServersService } from '../servers.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit, CanDeactivateGuard {
  @ViewChild('serverName') name: ElementRef;
  @ViewChild('serverStatus') status: ElementRef;
  server: Server;
  allowEdit: boolean = false;
  changesSaved: boolean = false;
  serverStatusOptions: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serversService: ServersService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServerByID(params.id);
        this.serverStatusOptions = this.serversService.getServerStatusOptions();
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
  }

  onServerUpdate() {
    const name = this.name.nativeElement.value;
    const status = this.status.nativeElement.value;
    this.server = new Server(this.server.id, name, status);
    this.serversService.updateServer(this.server);
    this.changesSaved = true;
    this.router.navigate(["/servers", this.server.id]);
  }

  // this method is only run when the component attempts to deactivate
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    else if (!this.changesSaved) {
      // confirm() method is a nifty way to receive a boolean from the user
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
