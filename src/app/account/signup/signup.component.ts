import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'cwpassword': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {

    if(this.signupForm.valid && this.passwordsAreValid()) {
      console.log(this.signupForm.value);
    }
  }

  /**
   * simple check for password equality
   * @returns {boolean}
   */
  passwordsAreValid() {
    let pw = this.signupForm.value.password;
    let cw = this.signupForm.value.cwpassword;
    return pw === cw;
  }
}
