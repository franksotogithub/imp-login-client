import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { UsuarioUI } from '../../models/usuario/ui/usuario.ui';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-usuarios-list-page',
  templateUrl: './usuarios-list-page.component.html',
  styleUrls: ['./usuarios-list-page.component.scss'],
  providers: [ConfirmationService]
})
export class UsuariosListPageComponent implements OnInit {
  usuarios !: UsuarioUI[];
  loading :boolean =false;
  constructor(private usuarioService: UsuarioService, private router:Router,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.list();
  }

  actualizar(usuario:UsuarioUI){
    this.router.navigate(['usuario',usuario.usuId,'update']);
  }


  crear(){

    this.router.navigate(['usuario/create']);

  }


  eliminar(usuario:UsuarioUI){

    this.confirmationService.confirm({
      message: 'Desea eliminar el usuario?',
      accept: () => {
        const id = usuario?.usuId;
        if (id)
          this.usuarioService.usuarioDelete(id)?.subscribe((res:boolean)=>{
            if(res){
              this.list();
            }


          });
      }
    });
  }

  list(){
    this.loading= true;
    this.usuarioService.usuarioList()?.subscribe((res)=>{
      if(res)
      {
        this.usuarios = res.filter(r=> r.usuActivo);
      }
      this.loading= false;
    });
  }
}
