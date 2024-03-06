import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.scss']
})
export class Assignment6Component {
  @ViewChild("form") form: NgForm;

  public submit() {
    console.log(this.form);
  }
}
