import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment4Component } from './assignment4.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddValueComponent } from './odd-value/odd-value.component';
import { EvenValueComponent } from './even-value/even-value.component';



@NgModule({
  exports: [
    Assignment4Component
  ],
  declarations: [
    Assignment4Component,
    GameControlComponent,
    OddValueComponent,
    EvenValueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Assignment4Module { }
