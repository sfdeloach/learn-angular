import { Injectable } from '@angular/core';
import { Form } from './form.model';

@Injectable()
export class FormDataService {
  formData: Form;

  constructor() {
    this.formData = new Form (
      'example@example.com',
      Form.subLevel.ADV,
      'secret-password'
    );
  }

  getForm(): Form {
    return this.formData;
  }

  setForm(form: Form) {
    this.formData = form;
  }
}
