import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage, TabsPage } from "../pages/index.pages";
import { StorageProvider } from '../providers/index.services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _strService:StorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this._strService.cargarStorage('logueado').then((result)=>{
        if(result){
          this.rootPage = TabsPage
        }else{
          this.rootPage = LoginPage;
        }
        
        
      })


    });
  }
}

