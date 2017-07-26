import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  @ViewChild('emailRefVar') emailVariable: NgModel;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    //console.log(this.signupForm);
    console.log(this.emailVariable);
  }
}
