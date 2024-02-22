import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-playground';

  public constructor(private router: Router) {
  }

  public onGoToAngularPlayground(): void {
    this.router.navigate(["/"])
  }
}
