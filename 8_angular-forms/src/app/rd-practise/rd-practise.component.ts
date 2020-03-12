import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustumValidators} from './custum-validators';

@Component({
  selector: 'app-rd-practise',
  templateUrl: './rd-practise.component.html',
  styleUrls: ['./rd-practise.component.css']
})
export class RdPractiseComponent implements OnInit {
  projectForm: FormGroup;
  states = ['Stable', 'Critical', 'Finished'];



  constructor() {
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectData: new FormGroup({
        projectName: new FormControl(null, [Validators.required, CustumValidators.forbiddenProjectName], CustumValidators.asyncForbiddenProjectName),
        email: new FormControl(null, [Validators.email, Validators.required]),
        projectStatus: new FormControl(this.states[0], Validators.required),
        }
      )
    });

    this.projectForm.patchValue({
      projectData: {
        projectStatus: 'Stable'
      }
    });
  }
  onSubmit() {
    console.log(this.projectForm );
  }
}
