import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage, AccountPage, LoginPage } from "../index.pages";
import { UserProvider } from '../../providers/user/user';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = AccountPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private _usrService:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  salir(){
    this._usrService.salir();
    this.navCtrl.setRoot(LoginPage);
    
  }

}
