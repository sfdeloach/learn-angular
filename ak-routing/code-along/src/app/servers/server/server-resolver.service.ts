import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Server } from '../../shared/server.model';
import { ServersService } from '../servers.service';

@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServerByID(route.params.id);
  }
}
