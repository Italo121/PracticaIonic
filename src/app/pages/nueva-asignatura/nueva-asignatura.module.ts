import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaAsignaturaPageRoutingModule } from './nueva-asignatura-routing.module';

import { NuevaAsignaturaPage } from './nueva-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaAsignaturaPageRoutingModule
  ],
  declarations: [NuevaAsignaturaPage]
})
export class NuevaAsignaturaPageModule {}
