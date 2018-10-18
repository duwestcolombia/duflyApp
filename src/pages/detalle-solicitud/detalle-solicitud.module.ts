import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleSolicitudPage } from './detalle-solicitud';

@NgModule({
  declarations: [
    DetalleSolicitudPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleSolicitudPage),
  ],
})
export class DetalleSolicitudPageModule {}
