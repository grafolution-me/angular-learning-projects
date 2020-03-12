import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent {
  @ViewChild('form', {static: true}) form: NgForm;
  private answer;
  private genders = ['male', 'female'];
  private user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  private isSubmitted = false;
  suggestUserName() {
    const suggestedName = 'NewName';
    this.form.form.patchValue({
      userData: {
        email: 'Test',
        username: suggestedName,
      },
      secretQuestion: 'pet'
    });
  }
  // onSubmit(formElement: NgForm) {
  //
  // }
    onSubmit() {
      this.isSubmitted = true;
      this.user.username = this.form.value.userData.username;
      this.user.email = this.form.value.userData.email;
      this.user.secretQuestion = this.form.value.secretQuestion;
      this.user.answer = this.form.value.qa;
      this.user.gender = this.form.value.gender;
      this.form.reset();
  }

}
