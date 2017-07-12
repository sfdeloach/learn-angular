import { Injectable, EventEmitter } from '@angular/core';

import { Server } from '../shared/server.model';

@Injectable()
export class ServersService {
  public newServerSelected: EventEmitter<number> = new EventEmitter<number>();
  public refreshServerList: EventEmitter<void> = new EventEmitter<void>();
  private servers: Server[] = [
    new Server("Productionserver", "Online"),
    new Server("Testserver", "Offline"),
    new Server("Devserver", "Unknown"),
  ];
  private serverStatusOptions: string[] = ["Online", "Offline", "Unknown"];
  private selectedServerIndex: number;

  constructor() { }

  getServers(): Server[] {
    return this.servers.slice();
  }

  setSelectedServerIndex(index: number) {
    this.selectedServerIndex = index;
    this.newServerSelected.emit(index);
  }

  getServerStatusOptions(): string[] {
    return this.serverStatusOptions;
  }

  updateServer(index: number, server: Server) {
    this.servers[index] = server;
    this.refreshServerList.emit();
  }
}
