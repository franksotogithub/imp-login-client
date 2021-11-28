import { Injectable } from '@angular/core';
import { SistemaModel } from '@app/module/layout/models/sistema/sistema.model';
import { SistemaUI } from '@app/module/layout/models/sistema/ui/sistema.ui';


import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SistemaService {
  constructor() {}

  public sistemaList( ): Observable<SistemaUI[]>| null | undefined {
    return;
  }

  public sistemaGet(id:number):Observable<SistemaUI>| null | undefined {
    return;
  }

  public sistemaUpdate( sistema: SistemaModel ): Observable<boolean>| null | undefined {

    return;
  }

  public sistemaDelete(id:number): Observable<boolean>| null | undefined {

    return;
  }



  public sistemaSubirFoto(file:any): Observable<any>| null | undefined {

    return;
  }
}
