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
  secretValue: string = "pet";
  questionAnswer: string = "test";
  genders: string[] = [
    "male",
    "female"
  ]
  formValues: {};
  hasSubmitted: boolean = false;


  suggestUsername() {
    // property this.signupForm refers to @ViewChild('form') signupForm: NgForm;
    // setValue method takes the entire form object for replacement
    this.signupForm.setValue({
      userData: {
        username: 'SuperUser SetValue',
        email: "superuser@yahoo.com"
      },
      gender: 'female',
      number: 12,
      questionAnswer: "This form's data was placed here by a click of suggestion!!!",
      secret: "teacher"
    });

    // patchValue method is a targeted approach to set values
    this.signupForm.form.patchValue({
      userData: {
        username: 'SuperUser PatchValue'
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.formValues = Object.assign({}, this.signupForm.value);
    this.hasSubmitted = true;
    this.signupForm.reset();
    console.log(this.formValues);
  }
}
