import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { UsuarioPerfilUI, UsuarioUI } from '../../models/usuario/ui/usuario.ui';
import { ChangePasswordModel, UsuarioModel } from '../../models/usuario/usuario.model';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  public usuarioList( ): Observable<UsuarioUI[]>| null | undefined {
    return;
  }

  public usuarioGet(id:number):Observable<UsuarioUI>| null | undefined {
    return;
  }

  public usuarioUpdate( Usuario: UsuarioModel ): Observable<any>| null | undefined {

    return;
  }

  public usuarioCreate( Usuario: UsuarioModel ): Observable<any>| null | undefined {

    return;
  }

  public usuarioDelete(id:number): Observable<boolean>| null | undefined {

    return;
  }

  public usuarioPerfilList(idUsuario: number):Observable<UsuarioPerfilUI[]>| null | undefined{
    return;
  }

  public  usuarioChangePassword(changePasswordModel:ChangePasswordModel ):Observable<any>| null | undefined{
    return;
  }


  public usuarioPerfilUpdate(usuarioPerfil:UsuarioPerfilUI):Observable<boolean>| null | undefined{
    return;
  }


  public usuarioPerfilDelete(id:number):Observable<boolean>| null | undefined{
    return;
  }
  public usuarioSubirFoto(file:any): Observable<any>| null | undefined {

    return;
  }
}
