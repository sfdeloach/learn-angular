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
  isValidForm: boolean; //TODO: used this property with a guard service
                        //      block the user from visiting '/form-confirm'
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
