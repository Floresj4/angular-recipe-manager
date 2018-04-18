import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm') signinForm: NgForm;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.signinForm.valid) {
      const email = this.signinForm.value.email;
      const password = this.signinForm.value.password;

      this.auth.signInUser(email, password)
        .then(response => {

          //assign a token upon sign in
          firebase.auth().currentUser.getToken()
            .then((token: string) => {
              this.auth.token = token
            });

          this.router.navigate(['/recipes']);

        })
        .catch(error => console.log(error));;
    }
  }
}
