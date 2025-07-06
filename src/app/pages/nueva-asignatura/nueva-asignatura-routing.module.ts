import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaAsignaturaPage } from './nueva-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaAsignaturaPageRoutingModule {}
