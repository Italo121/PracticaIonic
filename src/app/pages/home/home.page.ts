import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listaItems:MenuItem[]=[
    {
      ruta:'/botones',
      icono: 'radio-button-on-outline',
      etiqueta: 'botones'
    },
    {
      ruta:'/alertas',
      icono: 'warning-outline',
      etiqueta: 'alertas'
    },
    {
      ruta:'/formulario',
      icono: 'reader-outline',
      etiqueta: 'formulario'
    },
    {
      ruta:'/actionsheet',
      icono: 'albums-outline',
      etiqueta: 'action sheet'
    },
    {
      ruta:'/login',
      icono: 'person',
      etiqueta: 'login'
    },
  ]

  constructor( private router: Router) { }

  ngOnInit() {
  }

  Cursos () {
    this.router.navigate(['/pages/cursos'])
  }


}
