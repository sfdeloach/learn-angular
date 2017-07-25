import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx'; // for interval() method

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  mySubscription: Subscription;
  myNumberSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Simple creation of an Observable
    const myNumbers = Observable.interval(1000);

    // Subscriptions have three arguments:
    this.myNumberSubscription = myNumbers.subscribe(
      // A function that handles data when emitted by an event
      (num: number) => {
        console.log(num);
      },
      // A function that handles an error if it one occurs
      err => {
        console.log(err);
      },
      // A function to run when the Observable is complete, if it completes
      () => {
        console.log("All done!")
      }
    );

    const myObservable: Observable<string> = Observable.create(
      (observer: Observer<string>) => {
        // a list of asynch operations...
        setTimeout(() => {
          observer.next("#1 Hello from myObservable!");
        }, 2000);
        setTimeout(() => {
          observer.next("#2 Hello from myObservable!");
        }, 4000);
        setTimeout(() => {
          observer.error("Failure!");
          // observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next("This message will NOT be seen!");
        }, 6000);
      }
    );

    this.mySubscription = myObservable.subscribe(
      (data: string) => {console.log(data);},
      (err: string) => {console.log(err);},
      () => {console.log("All done!");}
    );
  }

  ngOnDestroy() {
    // Subscription must be canceled, otherwise it will continue after component is destroyed
    this.mySubscription.unsubscribe();
    this.myNumberSubscription.unsubscribe();
  }

}
