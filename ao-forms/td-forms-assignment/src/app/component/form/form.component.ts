import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FormDataService } from '../../form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(
    private formDataService: FormDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.formDataService.setForm(this.form.value);
    this.router.navigate(['/form-confirm']);
  }

  onClear() {
    // TODO
    console.log("Clear form.");
  }

  onAutoGenerate() {
    this.form.setValue(this.formDataService.formData);
  }
}
