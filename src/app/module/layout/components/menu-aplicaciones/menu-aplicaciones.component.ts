import { Component, OnInit } from '@angular/core';
import { AppUI } from '@app/module/login/models/ui/app.ui';

import { SessionUI } from '@app/module/login/models/ui/session.ui';
import { environment } from '@env/environment';


@Component({
  selector: 'app-menu-aplicaciones',
  templateUrl: './menu-aplicaciones.component.html',
  styleUrls: ['./menu-aplicaciones.component.scss']
})
export class MenuAplicacionesComponent implements OnInit {
  aplicaciones: Array<AppUI>=[];
  session: SessionUI;
  administrador =false;
  constructor() {
    let apps=localStorage.getItem('apps');
    let l=localStorage.getItem('currentUser');

    this.session  = l?JSON.parse(l):{};
    let admin =localStorage.getItem('administrador');
    this.administrador = admin&& parseInt(admin)==1? true:false;

    this.aplicaciones=(apps)?JSON.parse(apps):[];
    if(this.administrador){
      this.aplicaciones = this.aplicaciones.filter(e=> { return !(e.sisId == environment.sisIdAdmin && e.prfId == environment.prfIdAdmin )})
    }

   }

  ngOnInit(): void {
  }

}
