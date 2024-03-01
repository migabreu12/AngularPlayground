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

        // Example to trigger complete
        if(count == 2) {
          observer.complete();
        }

        // Example to trigger error
        // The complete step does not get triggered, though, on error
        if(count > 3) {
          // This error message will be shown in the console when an error occurs and the subscription will also end.
          // An error cancels the observer, it does not complete it.
          observer.error("Count is greater than 3!");
        }

        count++;
      }, 1000);
    });

    // .subscribe is deprecated so an alternative implementation is needed.
    this.subscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      alert(error);
      console.log(error);
    }, () => {
      // Completing an observer means it will be done so angular removes subscriptions
      // We still want to unsubscribe, though, in case the observable does not complete.
      console.log("Observable completed");
    });
  }

  public ngOnDestroy(): void {
    // Not all observables need an unsubscription, angular observables provided by angular automatically unsubscribe (they're managed by angular)
    this.subscription.unsubscribe();
  }
}
