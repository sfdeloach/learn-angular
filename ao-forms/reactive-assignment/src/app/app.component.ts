import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      // built-in synch validator chained with custom asynch validator (this is bound since errorMessage is referenced in the method)
      'name': [null, Validators.required, this.isNameValid.bind(this)],
      // two built-in synch validators (placed inside an array)
      'email': [null, [Validators.required, Validators.email]],
      // one built-in synch validator
      'status': ['critical', Validators.required]
    });
    this.errorMessage = "A name must be provided!";
  }

  // asynch custom validator method
  isNameValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value.toLowerCase() === 'test') {
            this.errorMessage = "Use of this name is forbidden.";
            resolve({'nameIsForbidden': true});
          } else {
            this.errorMessage = "You must provide a name!";
            resolve(null);
          }
        }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  // used for testing
  onConsole() {
    console.log(this.projectForm);
  }
}
