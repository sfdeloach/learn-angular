import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: string[] = [];
  serverNumber: number = 0;

  onAddServer() {
    this.servers.push(`Server #${this.serverNumber}`);
    this.serverNumber += 1;
  }

  onRemoveServer(id: number) {
    this.servers.splice(id, 1);
    if (this.servers.length === 0) {
        this.serverNumber = 0;
    }
  }
}
