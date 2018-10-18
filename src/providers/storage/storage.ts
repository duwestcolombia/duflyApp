import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class StorageProvider {

  constructor(private storage:Storage, private platform: Platform) {
    
  }

  guardarStorage(key:string,data){

    if(this.platform.is('cordova') || this.platform.is('android')){

      this.storage.set(key,data);

    }else{
      localStorage.setItem(key,JSON.stringify(data));
    }

  }

  cargarStorage(key:string){

    if(this.platform.is('cordova') || this.platform.is('android')){

      return new Promise((resolve,reject)=>{
        this.storage.ready().then(()=>{
          this.storage.get(key).then((result)=>{
            if (result) {              
              resolve(result);
            }else{
              resolve(false);
            }
          },(err)=>{
            reject(err);
          });
          
        })

      })

    }else{
      localStorage.getItem(JSON.parse(key));
    }

  }

  eliminarStorage(key:string){

    if(this.platform.is('cordova') || this.platform.is('android')){

      this.storage.remove(key);

    }else{
      localStorage.removeItem(key);
    }

  }

}
