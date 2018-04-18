import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

Injectable()
export class AuthService {

  token: string;

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {

        //assign a token upon sign in
        firebase.auth().currentUser.getToken()
          .then((token: string) => {
            this.token = token
          });

      })
      .catch(error => console.log(error));
  }

  getToken() {
    /**
     * update the token asynchronously, in the meantime return
     * whatever token already exists
     */
    firebase.auth().currentUser.getToken()
      .then((token: string) => {
        this.token = token;
      });

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
