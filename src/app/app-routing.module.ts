import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { Assignment4Component } from './components/assignment4/assignment4.component';
import { Assignment5Component } from './components/assignment5/assignment5.component';

const routes: Routes = [
  { path: "", component: HomeComponentComponent },
  { path: "home", component: HomeComponentComponent },
  { path: "home/:id/:name", component: HomeComponentComponent },
  { path: "home/:id/edit", component: HomeComponentComponent },
  { path: "assignment4", component: Assignment4Component },
  { path: "assignment5", component: Assignment5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
