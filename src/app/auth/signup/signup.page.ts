import { CommonProviderService } from './../../services/common-provider.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public form = {
    email: null,
    password: null,
  };
  constructor(
    public loadingController: LoadingController,
    private router: Router,
    private authService: AuthService,
    private common: CommonProviderService
  ) { }

  ngOnInit() {
  }

  singUp() {
    this.common.loadingPresent('please wait....');
    this.authService.signup(this.form.email, this.form.password).then(
      (userData) => {
      this.common.loadingDismiss();
      console.log('user data is; ', userData);
      this.common.toastShow('Sucessfully Created account', 'success');
      this.router.navigateByUrl('login');
      }).catch((error) =>
      {
        this.common.loadingDismiss();
        this.common.toastShow(error.message, 'danger');
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
