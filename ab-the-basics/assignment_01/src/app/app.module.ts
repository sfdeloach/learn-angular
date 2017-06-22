import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DangerAlertComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AlertComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
