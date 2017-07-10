import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleComponent: string = "Recipe Book";

  onHeaderClick(evt: string) {
    if (["Recipe Book", "Recipes", "Shopping List"].includes(evt)) {
      this.visibleComponent = evt;
    }
  }
}
