import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/shared/interfaces/can-component-deactivate.interface';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements CanComponentDeactivate {
  public goBackHomeClicked = false;

  public constructor(private route: ActivatedRoute, private router: Router) {}

  public GoBackHome(): void {
    this.goBackHomeClicked = true;
    this.router.navigate(["/"], { relativeTo: this.route})
  }

  public canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // This will allow for the router to navigate away without going through the confirmation message
    if(this.goBackHomeClicked) {
      return true;
    }
    // This introduces a bug in the auth test component since the logout button will attempt to navigate away, user can
    // click cancel, yet the logout button will continue to log the user out. Refactoring is needed to fix this issue.
    return confirm("Do you want to navigate away?");
  }
}
