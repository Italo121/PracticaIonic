import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[

      {
        path: 'cuenta',
        loadChildren: () => import('../cuenta/cuenta.module').then(m => m.CuentaPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'mas',
        loadChildren: () => import('../mas/mas.module').then( m => m.MasPageModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../cursos/cursos.module').then( m => m.CursosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
