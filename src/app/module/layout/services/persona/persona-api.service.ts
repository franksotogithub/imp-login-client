import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { map, catchError, switchMap } from 'rxjs/operators';

import { FormatHelper } from '@app/util/format.helper';

import { EndPoints } from '@app/global/end-points';



import { GeneralDataRequest } from '@app/shared/models/general/request/general-data.request';
import { PersonaService } from './persona.service';
import { PersonaUI } from '../../models/persona/ui/persona.ui';
import { PersonaRequest } from '../../models/persona/request/persona.request';
import { PersonaModel } from '../../models/persona/persona.model';


@Injectable({
  providedIn: 'root',
})

export class PersonaApiService extends PersonaService {
  constructor(private http: HttpClient) {
    super();
  }

  public override  personaList(): Observable<PersonaUI[]>| null | undefined {


    return this.http.post<GeneralDataRequest<PersonaRequest[]>>(`${EndPoints.PERSONA_LIST}`,{}).pipe(map((res)=>{
      let response:PersonaUI[]=[];

      if(res.status){
        /*response=  FormatHelper.formatResponseSitema(res);-*/
        response=res.data.map((e)=> {return FormatHelper.formatResponsePersona(e)});

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override personaGet(id:number):Observable<PersonaUI>| null | undefined{
    let data = {per_id:id}
    return this.http.post<GeneralDataRequest<PersonaRequest[]>>(`${EndPoints.PERSONA_LIST}`,data).pipe(map((res)=>{
      let response:PersonaUI;

      if(res.status && res.data.length>0 &&res.data[0]){

        response= FormatHelper.formatResponsePersona(res.data[0]);

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })



    );

  }


  public override personaUpdate( Persona: PersonaModel ): Observable<any> {
    let data = FormatHelper.formatRequestPersona(Persona);

    return this.http.post<GeneralDataRequest<any[]>>(`${EndPoints.PERSONA_UPDATE}`,data).pipe(map((res)=>{
      let response;

      if(res.status){
        response = res.data[0];
        /*response=res.data.map((e)=> {return FormatHelper.formatResponseSitema(e)});*/

      } else {
        throw new Error('No se ha logrado obtener datos del servidor');
      }
      return response;

    })

    );
  }




/*
  public  override personaDelete(id:number): Observable<boolean>| null | undefined {
    let data = {sis_id:id}

    return this.http.post<GeneralDataRequest<any>>(`${EndPoints.Persona_ACTIVACION}`,data).pipe(map((res)=>{
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

*/



}
