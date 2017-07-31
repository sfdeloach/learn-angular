import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
import { FormComponent } from '../component/form/form.component';
import { FormConfirmComponent } from '../component/form-confirm/form-confirm.component';
import { FormSubmitComponent } from '../component/form-submit/form-submit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-confirm', component: FormConfirmComponent },
  { path: 'form-submit', component: FormSubmitComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
