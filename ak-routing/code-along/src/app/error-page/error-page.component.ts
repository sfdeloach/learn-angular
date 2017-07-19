import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  error: {number: number, message: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.error = this.route.snapshot.data.error;
    this.route.data.subscribe(
      (data: Data) => {
        this.error = data.error;
      }
    );
  }

}
