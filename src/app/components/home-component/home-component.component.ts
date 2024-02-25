import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
export class HomeComponentComponent {
  public constructor(private router: Router) {
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
}
