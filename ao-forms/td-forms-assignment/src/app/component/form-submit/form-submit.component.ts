import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../../form-data.service';
import { Form } from '../../form.model';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    console.log("Data sent to the server.");
    console.log("Clearing the form.");
    this.formDataService.setForm(
      new Form('', this.formDataService.packages[1], ''));
    //TODO change isValidForm boolean to false
  }

}
