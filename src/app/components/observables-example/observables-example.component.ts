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
        count++;
      }, 1000);
    });

    this.subscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  public ngOnDestroy(): void {
    // Not all observables need an unsubscription, angular observables provided by angular automatically unsubscribe (they're managed by angular)
    this.subscription.unsubscribe();
  }
}
