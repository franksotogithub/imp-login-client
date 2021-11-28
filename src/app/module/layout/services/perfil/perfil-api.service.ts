import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';
import { PerfilService  } from './perfil.service';


import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { PerfilUI} from '@app/module/layout/models/perfil/ui/perfil.ui';
import { PerfilRequest } from '@app/module/layout/models/perfil/request/perfil.request';
import { PerfilModel } from '@app/module/layout/models/perfil/perfil.model';


@Injectable({
  providedIn: 'root',
})
export class perfilApiService extends PerfilService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  perfilList(idSistema:number): Observable<PerfilUI[]>| null | undefined {

    let data = {sis_id:idSistema}
    return this.http.post<GeneralDataRequest<PerfilRequest[]>>(`${EndPoints.PERFIL_LIST}`,data).pipe(map((res)=>{
      let response:PerfilUI[]=[];

      if(res.status){

        response=res.data.map((e)=> {return FormatHelper.formatResponsePerfil(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }




  public override perfilGet(idPerfil:number):Observable<PerfilUI>| null | undefined{
    let data = {prf_id:idPerfil}
    return this.http.post<GeneralDataRequest<PerfilRequest[]>>(`${EndPoints.PERFIL_LIST}`,data).pipe(map((res)=>{
      let response:PerfilUI;

      if(res.status && res.data.length>0 &&res.data[0]){

        response= FormatHelper.formatResponsePerfil(res.data[0]);

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override perfilUpdate( perfil: PerfilModel ): Observable<boolean> {
    let data = FormatHelper.formatRequestPerfil(perfil);
    console.log('data>>>',data);
    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.PERFIL_UPDATE}`,data).pipe(map((res)=>{
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





  public  override perfilDelete(id:number): Observable<boolean>| null | undefined {
    let data = {prf_id:id}

    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.PERFIL_DELETE}`,data).pipe(map((res)=>{
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
