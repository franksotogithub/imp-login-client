import { Component, OnInit } from '@angular/core';
import { AppUI } from '@app/module/login/models/ui/app.ui';
import { SessionUI } from '@app/module/login/models/ui/session.ui';
import { environment } from '@env/environment';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  aplicaciones: Array<AppUI> = [];
  session: SessionUI;

  administrador = false;
  constructor() {
    let apps = localStorage.getItem('apps');
    let l = localStorage.getItem('currentUser');
    this.session = l ? JSON.parse(l) : {};

    this.aplicaciones = apps ? JSON.parse(apps) : [];
    let admin =localStorage.getItem('administrador');
    this.administrador = admin&& parseInt(admin)==1? true:false;



    /*let aplicacion = this.aplicaciones.find((e) => {
      return e.sisId == environment.sisIdAdmin && e.prfId == environment.prfIdAdmin;
    });


    this.administrador = aplicacion ? true : false;*/
  }

  ngOnInit(): void {
    if (this.administrador) {
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
    } else {
      this.items = [
        {
          label: 'Aplicaciones',
          icon: 'pi pi-fw pi-map',
          routerLink: ['/aplicaciones'],
        },
      ];
    }
  }
}
