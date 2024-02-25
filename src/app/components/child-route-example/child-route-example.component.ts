import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-route-example',
  templateUrl: './child-route-example.component.html',
})
export class ChildRouteExampleComponent implements OnInit {
  public parameterPassedInViaPath: { id: number, name: string };
  public parametersChangedAfterReloadingComponent: { id: number, name: string };
  public paramsSubscription: Subscription;
  public queryParamsExample: { allowToEdit: boolean };

  public constructor(public route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.parameterPassedInViaPath = {
      // Using the route.snapshot is okay for on load data assignment
      // adding a + in front of a string will cast the string value as a number
      id: +this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }

    // Example of subscribing to the value on init without giving the subscription it's own property.
    this.route.queryParams.subscribe((queryParams) => {
      this.queryParamsExample = {
        allowToEdit: queryParams["allowToEdit"]
      };
    });

    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
    });

    // Example of getting the query params and fragments on load (but does not react to changes when redirected to same component)
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // Major note, angular will destroy subscriptions when the component is destroyed;
    // This is like garbage collection in .NET.
    // Important note though is that you do have to manage subscriptions when creating your own observables.
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.parametersChangedAfterReloadingComponent = {
          id: +params["id"],
          name: params["name"]
        }
      });  
  }
}
