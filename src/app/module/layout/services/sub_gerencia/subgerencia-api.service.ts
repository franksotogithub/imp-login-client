import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';



import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { SubGerenciaRequest } from '../../models/sub_gerencia/request/sub_gerencia.request';
import { SubGerenciaUI } from '../../models/sub_gerencia/ui/sub_gerencia.ui';
import { SubGerenciaService } from './subgerencia.service';





@Injectable({
  providedIn: 'root',
})
export class SubGerenciaApiService extends SubGerenciaService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  subGerenciaList(gerId?:number): Observable<SubGerenciaUI[]>| null | undefined {

    let data:any={ };
    if(gerId)
      data['ger_id'] =gerId
    return this.http.post<GeneralDataRequest<SubGerenciaRequest[]>>(`${EndPoints.SUBGERENCIA_LIST}`,data).pipe(map((res)=>{
      let response:SubGerenciaUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponseSubGerencia(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }





}
