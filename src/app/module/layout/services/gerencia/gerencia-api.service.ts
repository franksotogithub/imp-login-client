import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';



import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { GerenciaRequest } from '../../models/gerencia/request/gerencia.request';
import { GerenciaService } from './gerencia.service';
import { GerenciaUI } from '../../models/gerencia/ui/gerencia.ui';




@Injectable({
  providedIn: 'root',
})
export class GerenciaApiService extends GerenciaService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  gerenciaList(insId?:number): Observable<GerenciaUI[]>| null | undefined {

    let data:any={};
    if(insId)
      data['ins_id'] =insId


    return this.http.post<GeneralDataRequest<GerenciaRequest[]>>(`${EndPoints.GERENCIA_LIST}`,data).pipe(map((res)=>{
      let response:GerenciaUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponseGerencia(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }





}
