import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../../form-data.service';
import { Form } from '../../form.model';

@Component({
  selector: 'app-form-confirm',
  templateUrl: './form-confirm.component.html',
  styleUrls: ['./form-confirm.component.css']
})
export class FormConfirmComponent implements OnInit {
  form: Form;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.form = this.formDataService.getForm();
  }

}
