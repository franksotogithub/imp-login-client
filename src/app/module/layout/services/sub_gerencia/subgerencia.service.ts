import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { SubGerenciaUI } from '../../models/sub_gerencia/ui/sub_gerencia.ui';




@Injectable({
  providedIn: 'root',
})
export class SubGerenciaService {
  constructor() {}

  public subGerenciaList( gerId?:number): Observable<SubGerenciaUI[]>| null | undefined {
    return;
  }





}
