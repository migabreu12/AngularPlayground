import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-playground';

  public constructor(private router: Router, private route: ActivatedRoute) {
  }

  public onGoToAngularPlayground(): void {
    this.router.navigate(["/"])
  }

  public goToAssignment4RelativeExample(): void {
    // This let's you use relative path via relative to the component (and the component's current route)
    // Because relativeTo: this.route uses the component's current "path" via routing, it will always work correctly since it's current
    // route will always be "".
    // Here's the explanation on relative to:
    // "Relative to" means relative to the component in which this navigation is defined, not relative to the url which is currently displayed in the browser's address bar (which is not necessarily the same).
    this.router.navigate(["assignment4"], { relativeTo: this.route });
  }
}
