import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  title = 'ServerComponent';
  status = '';
  name = 'Organa';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(): string {
    return this.status === 'online' ? '#afea6b'/*green*/ : '#ff4242'/*red*/;
  }
}
