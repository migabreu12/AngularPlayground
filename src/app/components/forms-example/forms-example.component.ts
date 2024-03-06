import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['forms-example.component.scss']
})
export class FormsExampleComponent {
  @ViewChild('f') exampleForm: NgForm
  public defaultQuestion = "pet";
  public answer = "";
  public genders = [
    "male",
    "female"
  ]

  // public onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  public suggestUserName() {
    const suggestedName = "Superuser";
    // Must pass the exact value of the form and override all values
    // this.exampleForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male"
    // });

    this.exampleForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  public setDefaultValues() {
    // Must pass the exact value of the form and override all values
    this.exampleForm.setValue({
      userData: {
        username: "Default",
        email: ""
      },
      secret: "pet",
      questionAnswer: "",
      gender: "male"
    });
  }

  public onSubmit() {
    console.log(this.exampleForm);
  }
}
