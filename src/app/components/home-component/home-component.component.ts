import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  // styleUrls: ['./home-component.component.scss']
  styles: [`
    h3 {
      color: green
    }
  `]
})
export class HomeComponentComponent implements OnInit, OnDestroy {
  public parameterPassedInViaPath: { id: number, name: string };
  public parametersChangedAfterReloadingComponent: { id: number, name: string };
  public paramsSubscription: Subscription;
  public queryParamsExample: { allowToEdit: boolean };

  public constructor(private route: ActivatedRoute, private router: Router) {
  }

  public ngOnInit(): void {
    this.parameterPassedInViaPath = {
      // Using the route.snapshot is okay for on load data assignment
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }

    // Example of subscribing to the value on init without giving the subscription it's own property.
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParamsExample = {
        allowToEdit: queryParams["allowToEdit"]
      };
    });

    // Major note, angular will destroy subscriptions when the component is destroyed;
    // This is like garbage collection in .NET.
    // Important note though is that you do have to manage subscriptions when creating your own observables.
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.parametersChangedAfterReloadingComponent = {
          id: params["id"],
          name: params["name"]
        }
      });
  }

  public exampleOfNotReloadingComponentWithParameters() {
    // This example shows that the component does not reload (by angular default) because we're already
    // on the component; Not reloading the component is desired functionality to not waste resources.
    // The expected behavior is that the path will update but the displayed parameters will not.
    this.router.navigate(["/home", Math.random(), "nine"]);
  }

  // Example of sending query params and fragment via code behind
  public exampleOfPassingQueryParamsAndFragment(id: number): void {
    this.router.navigate(["/home", id, "edit"], {queryParams: { allowToEdit: false }, fragment:"TheFinalCountdown"})
  }

  public ngOnDestroy(): void {
    // The following code is an example of when you unsubscribe to a subscription manually
    this.paramsSubscription.unsubscribe();
  }
}
