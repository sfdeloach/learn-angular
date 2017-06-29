import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
