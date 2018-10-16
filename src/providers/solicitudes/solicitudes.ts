import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { UserProvider } from '../index.services';




@Injectable()
export class SolicitudesProvider {

  constructor(public http: HttpClient, private _usrService:UserProvider) {
    console.log('Hello SolicitudesProvider Provider');
  }
  
  // obtener(key, usuario){
  //   let url = URL_SERVICIOS+"solicitud/listarPorEmpleado/"+usuario;

  //   return new Promise( (resolve,reject)=>{
  //     this.http.get(url,{
  //       headers:new HttpHeaders().set('DUFLY-TOKEN', key)
  //     })
  //     .subscribe(res =>{
  //       resolve(res);
  //     }, (err) =>{
  //       reject(err);
  //     });

  //   });



  // }

}
