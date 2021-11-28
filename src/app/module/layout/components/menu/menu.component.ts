import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] =[];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Aplicaciones',
        icon: 'pi pi-fw pi-map',
        routerLink: ['/aplicaciones'],

    },
    {
      label: 'Mantenimiento de Usuarios',
      icon: 'pi pi-fw pi-map',
      routerLink: ['/usuario'],

  },
  {
    label: 'Mantenimiento de Sistemas',
    icon: 'pi pi-fw pi-map',
    routerLink: ['/sistema'],

},

  {
  label: 'Mantenimiento de Perfiles',
  icon: 'pi pi-fw pi-map',
  routerLink: ['/perfil'],

  },


  ];
  }

}
