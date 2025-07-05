import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciasCursoPage } from './asistencias-curso.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciasCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciasCursoPageRoutingModule {}
