import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS, NOM_TOKEN } from '../../config/url.servicios';


@Injectable()
export class SolicitudesProvider {

  token:{}={};

  constructor(public http: HttpClient) {
    console.log('Hello SolicitudesProvider Provider');
  }
  
   obtener(key, usuario){
     let url = URL_SERVICIOS+"solicitud/listarPorEmpleado/"+usuario;

     return new Promise( (resolve,reject)=>{
       this.http.get(url,{
         headers: new HttpHeaders().set(NOM_TOKEN,key)
        })
       .subscribe(res =>{     
         this.token = key;   
         resolve(res);
       }, (err) =>{
         reject(err);
       });

     });

   }
   verDetalle(codigoSolicitud){

      let url = URL_SERVICIOS+"solicitud/obtener/"+codigoSolicitud;

      return new Promise( (resolve,reject)=>{
        this.http.get(url,{
          headers: new HttpHeaders().set(NOM_TOKEN,this.token)
          })
        .subscribe(res =>{        
          resolve(res);
        }, (err) =>{
          reject(err);
        });

      });

   }

}
