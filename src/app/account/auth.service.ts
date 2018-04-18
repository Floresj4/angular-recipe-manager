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
    return firebase.auth().signInWithEmailAndPassword(email, password)
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

  logout() {
    firebase.auth().signOut()
      .then(response => this.token = null);
  }
}
