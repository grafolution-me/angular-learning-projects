import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rd',
  templateUrl: './rd.component.html',
  styleUrls: ['./rd.component.css']
})
export class RdComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female'];
  forbiddenUsernames = ['Felix', 'Fabian'];


  constructor() {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
    this.signupForm.patchValue({
      gender: 'male'
    })
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    /*
     @ts-ignore
    */
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (!this.forbiddenUsernames.indexOf(control.value)) {
      return {nameIsForbitten: true};
    } else {
      return null;
    }
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({emailIsForbidden: true});
          } else {
            resolve(null);
          }
        }, 1500);
    });
    return promise;
  }
}
