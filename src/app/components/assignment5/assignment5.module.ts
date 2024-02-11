import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { Assignment5Component } from './assignment5.component';



@NgModule({
  exports: [
    Assignment5Component
  ],
  declarations: [
    ActiveUsersComponent,
    Assignment5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Assignment5Module { }
