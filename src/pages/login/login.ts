import { Component } from '@angular/core';
import {  IonicPage, 
          NavController, 
          NavParams,
          AlertController,
          LoadingController        
        } from 'ionic-angular';


import { UserProvider,StorageProvider } from "../../providers/index.services";
import { TabsPage } from '../index.pages';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  correo:string = "";
  password:string = "";
  msg:string = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _usuService:UserProvider,
              private _strService:StorageProvider,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {

  }

  autenticar(){
    let load = this.loading();

    load.present();

    this._usuService.ingresar(this.correo.toLowerCase(),this.password)
                    .then( (result)=>{
                      
                      console.log(result);
                      load.dismiss();
                      if(result['response']){
                        this._strService.guardarStorage('logueado',true);
                        this._strService.guardarStorage('key',result['result']);

                        this.navCtrl.setRoot(TabsPage);

                      }else{
                        this.msg = result['message'];
                        this.alert();
                      }
    })
    
  }

  alert(){
    let msgalert = this.alertCtrl.create({
      title:'Error !',
      subTitle: this.msg,
      buttons:['Ok']
    })
    msgalert.present();
  }

  loading(){
    return this.loadingCtrl.create({
      content: "Autenticando ..."
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
