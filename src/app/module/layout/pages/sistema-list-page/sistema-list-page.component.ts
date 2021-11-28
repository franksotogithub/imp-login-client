import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SistemaService } from '@app/module/layout/services/sistema/sistema.service';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { SistemaUI } from '../../models/sistema/ui/sistema.ui';

@Component({
  selector: 'app-sistema-list-page',
  templateUrl: './sistema-list-page.component.html',
  styleUrls: ['./sistema-list-page.component.scss'],
  providers: [ConfirmationService]
})
export class SistemaListPageComponent implements OnInit {
  sistemas:SistemaUI[] =[];
  @ViewChild('dt') table: Table | undefined;
  loading: boolean = false;
  constructor(private sistemaService: SistemaService, private router:Router,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.list();
  }

  actualizar(sistema:SistemaUI){
    this.router.navigate(['sistema',sistema.sisId,'update']);
  }


  crear(){
    this.router.navigate(['sistema/create']);

  }


  eliminar(sistema:SistemaUI){


    this.confirmationService.confirm({
      message: 'Desea eliminar el sistema?',
      accept: () => {
        const id = sistema?.sisId;
        if (id)
          this.sistemaService.sistemaDelete(id)?.subscribe((res:boolean)=>{
            if(res)
            this.list();

          });
      }
    });
  }



  list(){
    this.loading= true;
    this.sistemaService.sistemaList()?.subscribe((res)=>{
      if(res)
      {
        this.sistemas = res;
      }
      this.loading= false;
    });
  }
}
