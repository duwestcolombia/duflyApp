import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

import { URL_SERVICIOS } from "../../config/url.servicios";
import { StorageProvider } from '../storage/storage';



@Injectable()
export class UserProvider {

  dataToken:any;
  key:string;
  constructor(public http: Http, public httpClient: HttpClient, private _strService:StorageProvider) {

  }

  ingresar(correo:string, contrasena:string){
    let url = URL_SERVICIOS + "auth/autenticar";

    let data = new URLSearchParams();

    data.append("Correo",correo);
    data.append("Password",contrasena);

    console.log(data);
    

    // return this.http.post(url,data)
    //                 .map( resp =>{
    //                   let data_resp = resp.json();                      
                      
    //                 })
    return new Promise((resolve,reject)=>{
      this.http.post(url,data).subscribe(res =>{
        resolve(res.json());
      },(err)=>{
        reject(err);
      })

    })


  }
  salir(){
    this._strService.eliminarStorage('logueado');
    this._strService.eliminarStorage('key');
    
  }
  
  obtieneDatos(token){
    
    let url = URL_SERVICIOS + "auth/validaToken";
    return new Promise((resolve, reject) => {
      this.httpClient.post(url, {token:token})
        .subscribe(res => {
  
          resolve(res['result']);
  
        }, (err) => {
          reject(err);
        });
    });
  }

}
