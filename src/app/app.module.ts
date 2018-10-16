import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from "@angular/http";

import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';


// Importar los servicios
import {  UserProvider,
          SolicitudesProvider,
          StorageProvider
} from '../providers/index.services';


// importar la paginas
import { 
  LoginPage,
  AccountPage,
  HomePage,
  TabsPage
 } from "../pages/index.pages";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AccountPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AccountPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    SolicitudesProvider,
    StorageProvider
  ]
})
export class AppModule {}
