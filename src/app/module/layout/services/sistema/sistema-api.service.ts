import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';
import { SistemaService,  } from './sistema.service';


import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { SistemaUI } from '@app/module/layout/models/sistema/ui/sistema.ui';
import { SistemaRequest } from '@app/module/layout/models/sistema/request/sistema.request';
import { SistemaModel } from '@app/module/layout/models/sistema/sistema.model';


@Injectable({
  providedIn: 'root',
})
export class SistemaApiService extends SistemaService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  sistemaList(): Observable<SistemaUI[]>| null | undefined {


    return this.http.post<GeneralDataRequest<SistemaRequest[]>>(`${EndPoints.SISTEMA_LIST}`,{}).pipe(map((res)=>{
      let response:SistemaUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponseSitema(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override sistemaGet(id:number):Observable<SistemaUI>| null | undefined{
    let data = {sis_id:id}
    return this.http.post<GeneralDataRequest<SistemaRequest[]>>(`${EndPoints.SISTEMA_LIST}`,data).pipe(map((res)=>{
      let response:SistemaUI;

      if(res.status && res.data.length>0 &&res.data[0]){

        response= FormatHelper.formatResponseSitema(res.data[0]);

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override sistemaUpdate( sistema: SistemaModel ): Observable<boolean> {
    let data = FormatHelper.formatRequestSistema(sistema);

    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.SISTEMA_UPDATE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response=true;
        /*response=res.data.map((e)=> {return FormatHelper.formatResponseSitema(e)});*/

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }





  public  override sistemaDelete(id:number): Observable<boolean>| null | undefined {
    let data = {sis_id:id}

    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.SISTEMA_DELETE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response=true;
        /*response=res.data.map((e)=> {return FormatHelper.formatResponseSitema(e)});*/

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }



  public override sistemaSubirFoto(file:any): Observable<any>| null | undefined {
    const formData: FormData = new FormData();

    formData.append('file', file, file.name);
    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.UPLOAD}`,formData).pipe(map((res)=>{
      let response;

      if (res.status && res.data) {
        response = res.data.file;
      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }

}
