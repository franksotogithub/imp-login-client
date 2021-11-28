import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';



import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { DistritoUI } from '../../models/distrito/ui/distrito.ui';
import { DistritoRequest } from '../../models/distrito/request/distrito.request';
import { DistritoService } from './distrito.service';



@Injectable({
  providedIn: 'root',
})
export class DistritoApiService extends DistritoService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  distritoList(): Observable<DistritoUI[]>| null | undefined {


    return this.http.post<GeneralDataRequest<DistritoRequest[]>>(`${EndPoints.DISTRITO_LIST}`,{}).pipe(map((res)=>{
      let response:DistritoUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponseDistrito(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }





}
