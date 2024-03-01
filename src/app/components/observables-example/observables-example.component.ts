import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observables-example',
  templateUrl: './observables-example.component.html',
  styleUrls: ['./observables-example.component.scss']
})
export class ObservablesExampleComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public ngOnInit(): void {
    this.subscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  public ngOnDestroy(): void {
    // Not all observables need an unsubscription, angular observables provided by angular automatically unsubscribe (they're managed by angular)
    this.subscription.unsubscribe();
  }
}
