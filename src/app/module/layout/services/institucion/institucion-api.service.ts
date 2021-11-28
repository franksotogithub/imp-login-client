import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';



import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { InstitucionUI } from '../../models/institucion/ui/institucion.ui';
import { InstitucionService } from './institucion.service';
import { InstitucionRequest } from '../../models/institucion/request/institucion.request';
import { InstitucionModel } from '../../models/institucion/institucion.model';


@Injectable({
  providedIn: 'root',
})
export class InstitucionApiService extends InstitucionService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  institucionList(): Observable<InstitucionUI[]>| null | undefined {


    return this.http.post<GeneralDataRequest<InstitucionRequest[]>>(`${EndPoints.INSTITUCION_LIST}`,{}).pipe(map((res)=>{
      let response:InstitucionUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponseInstitucion(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override institucionGet(id:number):Observable<InstitucionUI>| null | undefined{
    let data = {sis_id:id}
    return this.http.post<GeneralDataRequest<InstitucionRequest[]>>(`${EndPoints.INSTITUCION_LIST}`,data).pipe(map((res)=>{
      let response:InstitucionUI;

      if(res.status && res.data.length>0 &&res.data[0]){

        response= FormatHelper.formatResponseInstitucion(res.data[0]);

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override institucionUpdate( Institucion: InstitucionModel ): Observable<boolean> {
    let data = FormatHelper.formatRequestInstitucion(Institucion);

    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.INSTITUCION_UPDATE}`,data).pipe(map((res)=>{
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





}
