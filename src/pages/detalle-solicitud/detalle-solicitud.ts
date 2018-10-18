import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SolicitudesProvider } from '../../providers/index.services';



@IonicPage()
@Component({
  selector: 'page-detalle-solicitud',
  templateUrl: 'detalle-solicitud.html',
})
export class DetalleSolicitudPage {

  codSolicitud:string = "";
  detalle:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _solProvider:SolicitudesProvider,
              public loadingCtrl: LoadingController
            ) {

    console.log(this.navParams.data['datos']);
    this.codSolicitud = this.navParams.data['datos'];

  }
  obtenerDetalle(){

    let load = this.loadingCtrl.create({
      content:"Obteniendo Detalle..."
    });

    load.present();

    this._solProvider.verDetalle(this.codSolicitud).then((res)=>{
      load.dismiss();

      this.detalle = res;
      console.log(this.detalle);
      
    })
  }

  ionViewDidLoad() {
  
    
    this.obtenerDetalle();
    
    
  }

}
