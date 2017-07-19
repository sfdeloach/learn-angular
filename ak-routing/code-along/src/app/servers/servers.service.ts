import { Injectable, EventEmitter } from '@angular/core';

import { Server } from '../shared/server.model';

@Injectable()
export class ServersService {
  serversRefresh: EventEmitter<void> = new EventEmitter<void>();
  private servers: Server[] = [
    new Server(0, "Productionserver", "Online"),
    new Server(1, "Testserver", "Offline"),
    new Server(2, "Devserver", "Unknown"),
  ];

  private serverStatusOptions: string[] = ["Online", "Offline", "Unknown"];

  constructor() { }

  getServers(): Server[] {
    return this.servers.slice();
  }

  getServerByID(id: string): Server {
    return this.servers.find(
      (element: Server) => { return element.id === parseInt(id); }
    );
  }

  getServerStatusOptions(): string[] {
    return this.serverStatusOptions;
  }

  updateServer(server: Server) {
    this.servers[server.id] = server;
    this.serversRefresh.emit();
  }
}
