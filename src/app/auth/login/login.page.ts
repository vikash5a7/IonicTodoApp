import { Component, OnInit } from '@angular/core';
import {LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonProviderService } from 'src/app/services/common-provider.service';
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
    public loadingController: LoadingController,
    private router: Router,
    private authService: AuthService,
    private common: CommonProviderService
  ) {
    this.authService.isUserLogin();
   }

  ngOnInit() {
  }

  login() {
    this.common.loadingPresent('please wait....');
    this.authService.login(this.form.email, this.form.password).then(
      (userData) => {
      this.common.loadingDismiss();
      console.log('user data is; ', userData);
      this.common.toastShow('Logged in', 'success');
      this.router.navigateByUrl('home');
      }).catch((error) =>
      {
        this.common.loadingDismiss();
        this.common.toastShow(error.message, 'danger');
      });
  }
  goToRegister() {
    this.router.navigate(['/signup']);
  }
}
