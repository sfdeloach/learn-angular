import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      'name': [null, null, this.isNameValid],
      'email': [null, [Validators.required, Validators.email]],
      'status': ['critical', Validators.required]
    });
  }

  isNameValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (!control.value) {
            resolve({'nameIsNull': true})
          }
          else if (control.value.toLowerCase() === 'test') {
            resolve({'nameIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  onConsole() {
    console.log(this.projectForm);
  }
}
