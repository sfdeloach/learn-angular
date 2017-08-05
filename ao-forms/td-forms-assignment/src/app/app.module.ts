import { AppRoutesModule } from './app-routes/app-routes.module'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { FormConfirmComponent } from './component/form-confirm/form-confirm.component';
import { FormSubmitComponent } from './component/form-submit/form-submit.component';
import { HomeComponent } from './component/home/home.component';

import { FormDataService } from './form-data.service';
import { ValidFormService } from './valid-form.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormConfirmComponent,
    FormSubmitComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    FormDataService,
    ValidFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
