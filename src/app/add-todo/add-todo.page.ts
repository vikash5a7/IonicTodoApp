import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { CommonProviderService } from '../services/common-provider.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})

export class AddTodoPage implements OnInit {
  userId = null;
  public todo = {
    title: null,
    dec: null,
    Last_date : null,
  };
  constructor(
    private common: CommonProviderService,
    private navCtrl: NavController
  ) {
    console.log('User id', firebase.auth().currentUser.uid );
    this.userId = firebase.auth().currentUser.uid ;
   }

  ngOnInit() {
  }

  addToDo() {
    this.common.loadingPresent();
    firebase.firestore().collection('todo').add({
      title: this.todo.title,
      description: this.todo.dec,
      last_date: new Date (this.todo.Last_date),
      owner: this.userId,
      status: 'incomplete',
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((docRef) => {
      this.common.loadingDismiss();
      console.log('data: ', docRef);
      this.common.loadingDismiss();
      this.common.toastShow('succesfully added', 'success');
      this.navCtrl.back();
    }).catch((error) => {
      this.common.loadingDismiss();
      this.common.toastShow(error.message, 'red');
      console.log('error is', error);
    });

  }
}
