import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilModel } from '../../models/perfil/perfil.model';
import { PerfilUI } from '../../models/perfil/ui/perfil.ui';
import { SistemaModel } from '../../models/sistema/sistema.model';
import { SistemaUI } from '../../models/sistema/ui/sistema.ui';
import { PerfilService } from '../../services/perfil/perfil.service';
import { SistemaService } from '../../services/sistema/sistema.service';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-perfil-list-page',
  templateUrl: './perfil-list-page.component.html',
  styleUrls: ['./perfil-list-page.component.scss'],
  providers :[ConfirmationService]
})
export class PerfilListPageComponent implements OnInit {
  loading: boolean = false;
  display :boolean = false;
  titlePerfil:string ='';
  perfil !: PerfilModel;
  promiseList:any[] = [];
  perfiles !: PerfilUI[] ;
  sistemas :SistemaUI[] =[];
  sistema !:SistemaUI;
  idSistema !:number;
  title='';
  constructor(    private router: Router,
    private activeRouter: ActivatedRoute,private perfilService: PerfilService,private sistemaService: SistemaService  , private confirmationService: ConfirmationService, ) {

   }

  ngOnInit(): void {

    this.sistemaList();
  }




  perfilList(idSistema:number){
    this.loading = true;
    this.perfilService.perfilList(idSistema)?.subscribe(res=>{
      this.perfiles = res;
      this.loading = false;
      this.perfiles=this.perfiles.map(p=> {return  { ...p, sisId:idSistema } });

    });
  }


  onChangeSistema(e:any){
    /*console.log(e);*/
    /*if(this.sistema.sisId){
      this.perfilList(e);
    }*/

    console.log('e>>>>',e);
    if(e){
      this.idSistema =e;
      this.perfilList(e);
    }

  }

  actualizarPerfil(perfil: PerfilUI){
    this.titlePerfil ='Actualiza Perfil';
    this.display =true;
    this.perfil = new PerfilModel(perfil);


  }



  eliminarPerfil(perfil: PerfilUI){
    this.title ='Eliminar Perfil';
    this.confirmationService.confirm({
      message: 'Esta seguro que desea eliminar el perfil?',
      accept: () => {

    if(perfil && perfil.prfId){
      this.perfilService.perfilDelete(perfil.prfId)?.subscribe(res=>{

        this.perfilList(this.idSistema);
      })
    }

  },
  acceptLabel: 'Si',
});

  }

  crearPerfil(){

    this.titlePerfil ='Crear Perfil';
    this.display =true;
    this.perfil = new PerfilModel();
    this.perfil.sisId = this.idSistema;

  }

  savePerfil(){
    this.title ='Guardar Perfil';


    this.confirmationService.confirm({
      message: 'Esta seguro que desea guardar la informacion?',
      accept: () => {

    this.perfilService.perfilUpdate(this.perfil)?.subscribe(res=>{
      console.log('res>>>',res);
      this.display =false;
      this.perfilList(this.idSistema);
    });

  },
  acceptLabel: 'Si',
});



  }
  sistemaList(){

    this.sistemaService.sistemaList()?.subscribe((res)=>{
      this.sistemas = res;
    })
  }
}
