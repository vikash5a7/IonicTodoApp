import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: 'AIzaSyDf_yof6Fd8P0CTKlqA9fMu0kkprcPEhrw',
  authDomain: 'todoapp-56b40.firebaseapp.com',
  databaseURL: 'https://todoapp-56b40.firebaseio.com',
  projectId: 'todoapp-56b40',
  storageBucket: 'todoapp-56b40.appspot.com',
  messagingSenderId: '778933892695',
  appId: '1:778933892695:web:869a852aa3e1a31db51512',
  measurementId: 'G-D52BX6NY2J'
});
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
