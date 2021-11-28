import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';



import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { ChangePasswordModel, UsuarioModel } from '../../models/usuario/usuario.model';
import { UsuarioPerfilRequest, UsuarioRequest } from '../../models/usuario/request/usuario.request';
import { UsuarioPerfilUI, UsuarioUI } from '../../models/usuario/ui/usuario.ui';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root',
})

export class UsuarioApiService extends UsuarioService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  usuarioList(): Observable<UsuarioUI[]>| null | undefined {


    return this.http.post<GeneralDataRequest<UsuarioRequest[]>>(`${EndPoints.USUARIO_LIST}`,{}).pipe(map((res)=>{
      let response:UsuarioUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponseUsuario(e)});
        console.log('response>>>',response);
      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override usuarioGet(id:number):Observable<UsuarioUI>| null | undefined{
    let data = {usu_id:id}
    return this.http.post<GeneralDataRequest<UsuarioRequest[]>>(`${EndPoints.USUARIO_LIST}`,data).pipe(map((res)=>{
      let response:UsuarioUI;

      if(res.status && res.data.length>0 &&res.data[0]){

        response= FormatHelper.formatResponseUsuario(res.data[0]);

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override usuarioUpdate( Usuario: UsuarioModel ): Observable<any> {
    let data = FormatHelper.formatRequestUsuario(Usuario);

    return this.http.post<GeneralDataRequest<any[]>>(`${EndPoints.USUARIO_UPDATE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response= res.data[0];


      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }


  public override usuarioCreate( Usuario: UsuarioModel ): Observable<any> {
    let data = FormatHelper.formatRequestUsuario(Usuario);

    return this.http.post<GeneralDataRequest<any[]>>(`${EndPoints.USUARIO_CREATE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response= res.data[0];


      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }



  public  override usuarioDelete(id:number): Observable<boolean>| null | undefined {
    let data = {usu_id:id,usu_activo:0}


    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.USUARIO_ACTIVACION}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response=true;


      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }

  public override  usuarioChangePassword(changePasswordModel:ChangePasswordModel):Observable<any>| null | undefined {
    let data = {

      usu_id:changePasswordModel.usuId,
      usu_contrasenia:changePasswordModel.usuContrasenia
    }

    return this.http.post<GeneralDataRequest<any[]>>(`${EndPoints.USUARIO_UPDATE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response= res.data[0];


      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );

    return;
  }

/*
  public override  usuarioChangePassword() {

  }
*/
  public override usuarioPerfilList(idUsuario: number):Observable<UsuarioPerfilUI[]>| null | undefined{

    let data ={ usu_id:idUsuario};

    return this.http.post<GeneralDataRequest<UsuarioPerfilRequest[]>>(`${EndPoints.USUARIO_PERFIL_LIST}`,data).pipe(map((res)=>{
      let response:UsuarioPerfilUI[]=[];

      if(res.status){

        response=res.data.map((e)=> {return FormatHelper.formatResponseUsuarioPerfil(e)});
      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );
  }

  public override usuarioPerfilUpdate( usarioPerfil: UsuarioPerfilUI ): Observable<boolean> {
    let data = FormatHelper.formatRequestUsuarioPerfil(usarioPerfil);

    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.USUARIO_PERFIL_UPDATE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response=true;


      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })
    );
  }


  public override usuarioPerfilDelete( id: number ): Observable<boolean> {

    let data ={usp_activo:0, usp_id:id}
    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.USUARIO_PERFIL_ACTIVACION}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response=true;


      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })
    );
  }


}
