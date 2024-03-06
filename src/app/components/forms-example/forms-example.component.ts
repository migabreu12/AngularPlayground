import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html'
})
export class FormsExampleComponent {
  public onSubmit(form: NgForm) {
    console.log(form);
  }
}
