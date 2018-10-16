import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider, StorageProvider } from '../../providers/index.services';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:string = "";
  token:{}={};

  constructor(public navCtrl: NavController, private _usrService:UserProvider, private _strService:StorageProvider) {
  //obtenemos el token y lo pasamos a la funcion que obtiene los datos del usuario
    
    this.cargarToken();
    this.obtenerSolicitudes();

  }
  cargarToken(){
    this._strService.cargarStorage('key').then((result)=>{      
      this.infoUsuario(result);          
    })   

  }
  infoUsuario(token){ 
    
    this.token = token;
          
    this._usrService.obtieneDatos(token).then((res)=>{
      this.usuario = res['COD_EMPLEADO'];      
    })
  }
  obtenerSolicitudes(){
    console.log(this.token);
    console.log(this.usuario);
    
    
  }

}
