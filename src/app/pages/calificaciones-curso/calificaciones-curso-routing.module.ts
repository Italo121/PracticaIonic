import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificacionesCursoPage } from './calificaciones-curso.page';

const routes: Routes = [
  {
    path: '',
    component: CalificacionesCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificacionesCursoPageRoutingModule {}
