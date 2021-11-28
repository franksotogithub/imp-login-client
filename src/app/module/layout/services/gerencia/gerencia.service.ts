import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { GerenciaUI } from '../../models/gerencia/ui/gerencia.ui';



@Injectable({
  providedIn: 'root',
})
export class GerenciaService {
  constructor() {}

  public gerenciaList(insId?:number): Observable<GerenciaUI[]>| null | undefined {
    return;
  }





}
