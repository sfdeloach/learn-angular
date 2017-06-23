import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTextVisible: boolean = true;
  logList: string[] = [];

  toggleText(): void {
    this.isTextVisible = !this.isTextVisible;
  }

  newLogEntry(): void {
    this.logList.push(new Date() + ", text visible: " + this.isTextVisible);
  }
}
