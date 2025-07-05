import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesCursoPageRoutingModule } from './calificaciones-curso-routing.module';

import { CalificacionesCursoPage } from './calificaciones-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesCursoPageRoutingModule
  ],
  declarations: [CalificacionesCursoPage]
})
export class CalificacionesCursoPageModule {}
