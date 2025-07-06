import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mas',
    loadChildren: () => import('./pages/mas/mas.module').then( m => m.MasPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./pages/asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./pages/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'detalle-curso',
    loadChildren: () => import('./pages/detalle-curso/detalle-curso.module').then( m => m.DetalleCursoPageModule)
  },  {
    path: 'clases-curso',
    loadChildren: () => import('./pages/clases-curso/clases-curso.module').then( m => m.ClasesCursoPageModule)
  },
  {
    path: 'calificaciones-curso',
    loadChildren: () => import('./pages/calificaciones-curso/calificaciones-curso.module').then( m => m.CalificacionesCursoPageModule)
  },
  {
    path: 'asistencias-curso',
    loadChildren: () => import('./pages/asistencias-curso/asistencias-curso.module').then( m => m.AsistenciasCursoPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'certificados',
    loadChildren: () => import('./pages/certificados/certificados.module').then( m => m.CertificadosPageModule)
  },
  {
    path: 'detalle-alumno',
    loadChildren: () => import('./pages/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'nueva-asignatura',
    loadChildren: () => import('./pages/nueva-asignatura/nueva-asignatura.module').then( m => m.NuevaAsignaturaPageModule)
  },
  {
    path: 'nuevo-alumno',
    loadChildren: () => import('./pages/nuevo-alumno/nuevo-alumno.module').then( m => m.NuevoAlumnoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
