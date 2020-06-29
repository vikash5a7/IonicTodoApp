import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
  ) { }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout() {
    firebase.auth().signOut();
  }
  getActiveUser() {
    return firebase.auth().currentUser;
  }
  isUserLogin() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigateByUrl('home');
      }
    });
  }
}
