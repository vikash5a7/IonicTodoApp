import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form = {
    email: null,
    password: null,
  };
  constructor(
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
  }

  goToRegister() {
    this.router.navigate(['/signup']);
  }
}
