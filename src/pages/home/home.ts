import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserProvider, StorageProvider, SolicitudesProvider } from '../../providers/index.services';
import { DetalleSolicitudPage } from '../index.pages';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:string = "";
  token:{}={};
  datos:any;

  constructor(public navCtrl: NavController, 
              private _usrService:UserProvider, 
              private _strService:StorageProvider,
              private _solProvider:SolicitudesProvider,
              public loadingCtrl: LoadingController
            ) {
  //obtenemos el token y lo pasamos a la funcion que obtiene los datos del usuario
    
    this.cargarToken();
    

  }
  cargarToken(){
    this._strService.cargarStorage('key').then((result)=>{    
      
      this.token = result;
       
      this.infoUsuario(this.token);          
    })   

  }
  infoUsuario(token){ 
               
    this._usrService.obtieneDatos(token).then((res)=>{
      console.log(res);
      
      this.usuario = res['COD_EMPLEADO'];      
     
      this.obtenerSolicitudes();
      
    })
  }
  obtenerSolicitudes(){
    let load = this.loadingCtrl.create({
      content:"Obteniendo Solicitudes..."
    });

    load.present();
    
    this._solProvider.obtener(this.token,this.usuario).then((res)=>{
      load.dismiss();
      console.log(res);
      this.datos = res;
    })
    
    
  }
  verDetalle(cod_solicitud){
    this.navCtrl.push(DetalleSolicitudPage,{
      datos:cod_solicitud
    });
  }

  ionViewDidLoad() {
    
  }

}
