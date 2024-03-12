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
import { AuthResolverService } from './shared/services/auth-resolver.service';
import { ObservablesExampleComponent } from './components/observables-example/observables-example.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { Assignment6Component } from './components/assignment6/assignment6.component';
import { TemplateDrivenFormExampleComponent } from './components/forms-example/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/forms-example/reactive-form-example/reactive-form-example.component';
import { Assignment7Component } from './components/assignment7/assignment7.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { Assignment8Component } from './components/assignment8/assignment8.component';

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
    resolve: {
      isAuthenticated: AuthResolverService
    },
    children: [
      { path: "loggedIn", component: LoggedInComponent, canDeactivate: [canDeactivateGuard] }
    ]
  },
  {
    path: "observablesExample",
    component: ObservablesExampleComponent
  },
  {
    path: "formsExample",
    component: FormsExampleComponent,
    children: [
      {
        path: "template-driven-form-example",
        component: TemplateDrivenFormExampleComponent
      },
      {
        path: "reactive-form-example",
        component: ReactiveFormExampleComponent
      }
    ]
  },
  {
    path: "assignment6",
    component: Assignment6Component
  },
  {
    path: "assignment7",
    component: Assignment7Component
  },
  {
    path: "pipesExample",
    component: PipesExampleComponent
  },
  {
    path: "assignment8",
    component: Assignment8Component
  },
  // Routes get parsed from top to bottom so ensure that the wild card route is the very last.
  // If the wild card is not the very last in the routes list then we will always get the not found page
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  // useHash enables hash mode routing; What hash mode routing means is that it will inform the server to "only care" about the part before
  // the hash symbol (which leaves the content after the hash to angular). Hash mode routing ensures that the hosing server will not
  // interfere with the url path. Using hash mode is a good technique to work around hosting servers that cannot return the index.html
  // file in the case of a 404 occurance.
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  // Exporting the RouterModule here actually exports a configured RouterModule for which can be imported by other modules.
  // Seems like we could actually chain this kind of behavior (not sure what use it would have though except inheritence and expansion)
  exports: [RouterModule]
})
export class AppRoutingModule { }
