import { Component, OnInit } from '@angular/core';
import { AppUI } from '@app/module/login/models/ui/app.ui';

import { SessionUI } from '@app/module/login/models/ui/session.ui';


@Component({
  selector: 'app-menu-aplicaciones',
  templateUrl: './menu-aplicaciones.component.html',
  styleUrls: ['./menu-aplicaciones.component.scss']
})
export class MenuAplicacionesComponent implements OnInit {
  aplicaciones: Array<AppUI>=[];
  session: SessionUI;
  constructor() {
    let apps=localStorage.getItem('apps');
    let l=localStorage.getItem('currentUser')
    this.session  = l?JSON.parse(l):{};


    this.aplicaciones=(apps)?JSON.parse(apps):[];


   }

  ngOnInit(): void {
  }

}
