import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
export class HomeComponentComponent {
  public parameterPassedInViaPath: { id: number, name: string };
  public parametersChangedAfterReloadingComponent: { id: number, name: string };

  public constructor(private route: ActivatedRoute, private router: Router) {
    this.parameterPassedInViaPath = {
      // Using the route.snapshot is okay for on load data assignment
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }
    this.route.params
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
}
