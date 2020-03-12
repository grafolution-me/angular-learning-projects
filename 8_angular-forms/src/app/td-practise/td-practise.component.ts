import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-practise',
  templateUrl: './td-practise.component.html',
  styleUrls: ['./td-practise.component.css']
})
export class TdPractiseComponent implements OnInit, AfterContentChecked {
  @ViewChild('form', {static: true}) form: NgForm;
  isSubmitted = false;
  private formData = {
    email: '',
    password: '',
    subscription: ''

  };
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentChecked(): void {
    this.form.form.patchValue({
      subscription: 'advanced',
    });
  }

  submit() {
    this.formData.email = this.form.value.email;
    this.formData.subscription = this.form.value.subscription;
    this.formData.password = this.form.value.password;
    this.isSubmitted = true;
  }

}
