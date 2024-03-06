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
  ];
  public user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  };
  public submitted = false;

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
    this.submitted = false;
  }

  public resetForm() {
    this.exampleForm.reset();
  }

  public onSubmit() {
    this.submitted = true;
    this.user = {
      username: this.exampleForm.form.value.userData.username,
      email: this.exampleForm.form.value.userData.email,
      secretQuestion: this.exampleForm.form.value.secret,
      answer: this.exampleForm.form.value.questionAnswer,
      gender: this.exampleForm.form.value.gender
    }
  }
}
