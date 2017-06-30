import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleComponent: string = "Recipes";

  onHeaderClick(evt: string) {
    this.visibleComponent = evt;

    // switch (evt) {
    //   case 'Recipe Book': {
    //     console.log("TODO: recipe book not implemented");
    //     break;
    //   }
    //   case 'Recipes': {
    //     this.visibleComponent = "recipes";
    //     break;
    //   }
    //   case 'Shopping List': {
    //     this.visibleComponent = "shopping-list"
    //     break;
    //   }
    //   case 'Manage': {
    //     console.log("TODO: manage not implemented");
    //     break;
    //   }
    //   // default condition not specified intentionally
    // }
  }
}
