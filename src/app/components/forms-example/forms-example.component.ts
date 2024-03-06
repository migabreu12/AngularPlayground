import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html'
})
export class FormsExampleComponent {
  @ViewChild('f') form: NgForm

  // public onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  public onSubmit() {
    console.log(this.form);
  }
}
