import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../../form-data.service';
import { Form } from '../../form.model';

@Component({
  selector: 'app-form-confirm',
  templateUrl: './form-confirm.component.html',
  styleUrls: ['./form-confirm.component.css']
})
export class FormConfirmComponent implements OnInit {
  form: Form;

  constructor(
    private formDataService: FormDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formDataService.getForm();
  }

  looksGood() {
    this.formDataService.isValidForm = false;
    this.router.navigate(["/form-submit"]);
  }
}
