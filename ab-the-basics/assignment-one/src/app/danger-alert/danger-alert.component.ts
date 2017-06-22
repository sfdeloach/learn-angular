import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-alert',
  template: `
    <div class="alert alert-danger">
      <i class="fa fa-frown-o" aria-hidden="true"></i>
      This is a dangerous alert! (internal template was used)
    </div>
    `,
  //templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.css']
})
export class DangerAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
