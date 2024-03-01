import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';
import { SubjectExampleService } from 'src/app/shared/services/subject-example.service';

@Component({
  selector: 'app-observables-example',
  templateUrl: './observables-example.component.html',
  styleUrls: ['./observables-example.component.scss']
})
export class ObservablesExampleComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public activated = false;

  public constructor(private subjectExampleService: SubjectExampleService) {}

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
    this.subscription = customIntervalObservable
    // Data can be transformed like DTO here because we can also return a new type of data.
    // Operators work like a queue where the end of the queue is the subscribe.
    .pipe(
      // Filter takes in a conditional argument to see if we pass the data along or not
      // True == pass, False == drop
      filter((data: number) => {
        return data % 2 == 0;
      }),
      // Map is an operator on observables that lets you transform the data before it reaches the observable.
      map((data: number) => {
        return "Round: " + ++data;
      })
    )
    .subscribe(data => {
      console.log(data);
    }, error => {
      alert(error);
      console.log(error);
    }, () => {
      // Completing an observer means it will be done so angular removes subscriptions
      // We still want to unsubscribe, though, in case the observable does not complete.
      console.log("Observable completed");
    });


    // Here is the example for subjects
    // Using a subject allows for also using pipes (since a subject is a different kind of observable)
    this.subjectExampleService.activatedEmitter.subscribe(data => {
      this.activated = data;
    })
  }

  public onActivated() {
    // This next method triggers emitting a value from the observable for which subscriptions can react.
    // The purpose of a subject is to be able to emit values manually
    this.subjectExampleService.activatedEmitter.next(true);
  }

  public ngOnDestroy(): void {
    // Not all observables need an unsubscription, angular observables provided by angular automatically unsubscribe (they're managed by angular)
    this.subscription.unsubscribe();
  }
}
