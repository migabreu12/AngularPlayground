import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  public genders = ['male', 'female'];
  public exampleForm: FormGroup;
  public forbiddenNames = ['admin', 'master'];

  public ngOnInit(): void {
    // "Controls are basically key valued pairs we pass into the form group"
    this.exampleForm = new FormGroup({
      "userData": new FormGroup({
        // The first parameter of the form control (form state) is actually the initial value of the form control
        // "username": new FormControl(null, Validators.required),
        "username": new FormControl(null, [Validators.required, this.customValidator.bind(this)]),
        // The custom async validator will add the ng-pending class while the call is pending and will replace ng-pending with
        // either ng-valid or ng-invalid when the call resolves.
        "email": new FormControl(null, [Validators.required, Validators.email], [this.customAsyncValidator]),
      }),
      "gender": new FormControl("male"),
      "hobbies": new FormArray([])
    });

    // Examples of value and status change subscriptions
    // this.exampleForm.valueChanges.subscribe((changes) => {
    //   // The value changes parameter is the form object itself (of type FormGroup since that's what we assign to this.exampleForm) with all
    //   // the values of the form (userdata, gender, hobbies)
    //   console.log(changes);
    // });

    this.exampleForm.statusChanges.subscribe((formStatus) => {
      console.log(formStatus);
    });

    // Using setValue or patchValue stil; work here on the exampleForm and will also trigger the validators.
    // Can also use reset on the exampleForm
  }

  public onSubmit() {
    console.log(this.exampleForm);
  }

  public addHobby() {
    // Have to typecast to FormArray so we can have access to the push method; I feel like there's a different way to do this
    // that doesn't involve typecasting.
    const emptyHobby = new FormControl(null, Validators.required);
    // This push adds a new control to the example form object (which is interactable by the user); What this means is that the form
    // control can be updated and editated at any time and the example form will retain the changed value (alongside any validators. etc)
    (<FormArray>this.exampleForm.get("hobbies")).push(emptyHobby);
  }

  // This method is needed because the example code attempts to get the hobbies in the template (which is not allowed anymore)
  public getHobbyControls(): AbstractControl<any, any>[] {
    return (<FormArray>this.exampleForm.get("hobbies")).controls;
  }

  public customValidator(formControl: FormControl): {[errorCode: string]: boolean} {
    if(this.forbiddenNames.indexOf(String(formControl.value).toLowerCase()) !== -1) {
      return {"nameIsForbidden": true};
    }

    return null;
  }

  public customAsyncValidator(formControl: FormControl): Promise<any> | Observable<any> {
    // For some reason, returning the promise caused the state to never return valid.
    // The reason is unknown for now; The workaround (which was in the example) is to
    // set the promise to a const and return the const.
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(formControl.value == "test@test.com") {
          resolve({ "emailIsForbidden": true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
