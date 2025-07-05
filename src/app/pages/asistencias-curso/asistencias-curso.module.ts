import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciasCursoPageRoutingModule } from './asistencias-curso-routing.module';

import { AsistenciasCursoPage } from './asistencias-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciasCursoPageRoutingModule
  ],
  declarations: [AsistenciasCursoPage]
})
export class AsistenciasCursoPageModule {}
