import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { merge } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userId: string;
  todos: any[] = [];
  constructor(
    private navController: NavController,
  ) {
    this.userId = firebase.auth().currentUser.uid;
    this.getToDos();
  }

  gotToDoPage() {
      this.navController.navigateForward(['\add-todo']);
  }

  getToDos() {
    firebase.firestore().collection('todo')
    .where('owner', '==', this.userId)
    .where('status', '==', 'incomplete')
    .onSnapshot((snapshot) => {
      console.log('user data ', snapshot);
      this.todos = snapshot.docs;
    });
  }
  markCompleted(document: firebase.firestore.QueryDocumentSnapshot) {
  firebase.firestore().collection('todo').doc(document.id).set({
    // tslint:disable-next-line: object-literal-key-quotes
    'status' : 'completed'
  }).then(() => {
    console.log('completed'); }
  );
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.navController.navigateRoot('login'); }
    );
  }
  delete(item) {
  }

}
