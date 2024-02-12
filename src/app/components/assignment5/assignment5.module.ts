import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { Assignment5Component } from './assignment5.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';
import { UsersListComponent } from './components/users-list/users-list.component';



@NgModule({
  exports: [
    Assignment5Component
  ],
  declarations: [
    ActiveUsersComponent,
    Assignment5Component,
    InactiveUsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Assignment5Module { }
