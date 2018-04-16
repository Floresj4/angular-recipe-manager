import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm') signinForm: NgForm;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.signinForm.valid) {
      const email = this.signinForm.value.email;
      const password = this.signinForm.value.password;

      this.auth.signInUser(email, password);
    }
  }
}
