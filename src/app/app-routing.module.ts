import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { Assignment4Component } from './components/assignment4/assignment4.component';
import { Assignment5Component } from './components/assignment5/assignment5.component';
import { ChildRouteExampleComponent } from './components/child-route-example/child-route-example.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { canActivateChildGuard } from './shared/services/auth-guard.service';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { canDeactivateGuard } from './shared/services/can-deactivate-guard.service';

const routes: Routes = [
  // Add pathMatch full to ensure that we get redirected to the home component only when there is nothing in the path.
  // If pathMatch is not there, we may not always be rerouted if we are redirecting.
  { path: "", component: HomeComponentComponent, pathMatch: 'full' },
  {
    path: "home",
    component: HomeComponentComponent,
    // loading these requires a router outlet in the homeComponent to load it
    children: [
      { path: ":id/:name", component: ChildRouteExampleComponent },
      { path: ":id/edit", component: ChildRouteExampleComponent },
    ]
  },
  { path: "assignment4", component: Assignment4Component },
  { path: "assignment5", component: Assignment5Component },
  {
    path: "not-found",
    component: PageNotFoundComponent,
    data: {
      message: "Example of Data passed in through router"
    }
  },
  {
    path: "authTest",
    canActivateChild: [ canActivateChildGuard ],
    component: AuthTestComponent,
    children: [
      { path: "loggedIn", component: LoggedInComponent, canDeactivate: [canDeactivateGuard] }
    ]
  },
  // Routes get parsed from top to bottom so ensure that the wild card route is the very last.
  // If the wild card is not the very last in the routes list then we will always get the not found page
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Exporting the RouterModule here actually exports a configured RouterModule for which can be imported by other modules.
  // Seems like we could actually chain this kind of behavior (not sure what use it would have though except inheritence and expansion)
  exports: [RouterModule]
})
export class AppRoutingModule { }
