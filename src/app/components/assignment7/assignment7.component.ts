import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.scss']
})
export class Assignment7Component implements OnInit {
  public assignmentForm: FormGroup;

  public projectStatuses = ["Stable", "Critical", "Finished"];
  /*
    Create a Form with the following Controls and Validators
    1) Project Name (should not be empty)
    2) Mail (should not be a empty and a valid email)
    3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
    4) Submit Button

    Add your own Validator which doesn't allow "Test" as a Project Name

    Also implement that Validator as an async Validator (replace the other one)

    Upon submitting the form, simply print the value to the console
  */
  public ngOnInit(): void {
    this.assignmentForm = new FormGroup({
      "projectName": new FormControl(null, Validators.required, this.forbiddenProjectNamesValidatorAsync),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "projectStatus": new FormControl(this.projectStatuses[0])
    });
  }

  // Example of non-async validator
  public forbiddenProjectNamesValidator(formControl: FormControl): {[errorCode: string]: boolean} {
    if(formControl.value == "Test") {
      return { "projectNameForbidden": true };
    }

    return null;
  }

  public forbiddenProjectNamesValidatorAsync(formControl: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(formControl.value == "Test") {
          resolve({ "projectNameForbidden": true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  public onSubmit() {
    console.log(this.assignmentForm);
  }
}
