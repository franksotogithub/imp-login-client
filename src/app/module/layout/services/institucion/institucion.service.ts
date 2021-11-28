import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { InstitucionModel } from '../../models/institucion/institucion.model';
import { InstitucionUI } from '../../models/institucion/ui/institucion.ui';


@Injectable({
  providedIn: 'root',
})
export class InstitucionService {
  constructor() {}

  public institucionList( ): Observable<InstitucionUI[]>| null | undefined {
    return;
  }

  public institucionGet(id:number):Observable<InstitucionUI>| null | undefined {
    return;
  }

  public institucionUpdate( Institucion: InstitucionModel ): Observable<boolean>| null | undefined {

    return;
  }





}
