import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
  oddNumbers: boolean = false;

  toggleOdd(): void {
    this.oddNumbers = !this.oddNumbers;
    console.log(this.oddNumbers);
  }
}
