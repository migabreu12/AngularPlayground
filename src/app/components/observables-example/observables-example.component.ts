import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observables-example',
  templateUrl: './observables-example.component.html',
  styleUrls: ['./observables-example.component.scss']
})
export class ObservablesExampleComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public ngOnInit(): void {
    // this.subscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // Here's an example of a custom observable (the create method is deprecated so
    // here is the new way of creating an observabler)
    // Next emits whatever you pass in so that subscriptions can catch the value
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if(count > 3) {
          // This error message will be shown in the console when an error occurs and the subscription will also end
          observer.error("Count is greater than 3!");
        }

        count++;
      }, 1000);
    });

    // .subscribe is deprecated so an alternative implementation is needed.
    this.subscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  public ngOnDestroy(): void {
    // Not all observables need an unsubscription, angular observables provided by angular automatically unsubscribe (they're managed by angular)
    this.subscription.unsubscribe();
  }
}
