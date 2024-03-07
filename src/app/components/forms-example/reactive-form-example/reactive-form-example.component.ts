import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  public genders = ['male', 'female'];
  public exampleForm: FormGroup;

  public ngOnInit(): void {
    // "Controls are basically key valued pairs we pass into the form group"
    this.exampleForm = new FormGroup({
      "userData": new FormGroup({
        // The first parameter of the form control (form state) is actually the initial value of the form control
        "username": new FormControl(null, Validators.required),
        "email": new FormControl(null, [Validators.required, Validators.email]),
      }),
      "gender": new FormControl("male")
    })
  }

  public onSubmit() {
    console.log(this.exampleForm);
  }
}
