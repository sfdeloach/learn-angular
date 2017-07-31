import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormDataService } from '../../form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }

  onClear() {
    // TODO
    console.log("Clear form.");
  }
}
