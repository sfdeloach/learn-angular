import { Injectable } from '@angular/core';
import { Form } from './form.model';

@Injectable()
export class FormDataService {
  formData: Form;
  public packages: string[] = [
    "Basic",
    "Advanced",
    "Professional"
  ];
  isValidForm: boolean;

  constructor() {
    this.formData = new Form(
      '',
      this.packages[1],
      ''
    );
    this.isValidForm = false;
  }

  getForm(): Form {
    return this.formData;
  }

  setForm(form: Form) {
    this.formData = form;
  }
}
