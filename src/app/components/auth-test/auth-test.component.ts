import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth-test',
  templateUrl: './auth-test.component.html',
  styleUrls: ['./auth-test.component.scss']
})
export class AuthTestComponent implements OnInit {
  public loggedInState: boolean;

  public constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.authService.isAuthenticated().then((loggedInState) => {
      this.loggedInState = loggedInState;
    });

    this.authService.loggedInStateObservable.subscribe((loggedInState) => {
      this.loggedInState = loggedInState;
      if(this.loggedInState) {
        setTimeout(() => {
          // Using relative path intentionally
          this.router.navigate(['loggedIn'], {relativeTo: this.route});
        }, 800);
      } else {
        // Navigate back to the auth test component
        this.router.navigate(['.'], {relativeTo: this.route});
      }
    })
  }

  public logIn() {
    this.authService.logIn();
  }

  public logOut() {
    this.authService.logOut();
  }
}
