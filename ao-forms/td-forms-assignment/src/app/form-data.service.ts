import { Injectable } from '@angular/core';
import { Form } from './form.model';

@Injectable()
export class FormDataService {
  formData: Form;
  public packages: string[] = [
    "Basic",
    "Advanced",
    "Professional"
  ]

  constructor() {
    this.formData = new Form (
      'example@example.com',
      this.packages[0],
      'super_secret_password'
    );
  }

  getForm(): Form {
    return this.formData;
  }

  setForm(form: Form) {
    this.formData = form;
  }
}
