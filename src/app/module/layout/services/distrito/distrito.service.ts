import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { DistritoUI } from '../../models/distrito/ui/distrito.ui';


@Injectable({
  providedIn: 'root',
})
export class DistritoService {
  constructor() {}

  public distritoList( ): Observable<DistritoUI[]>| null | undefined {
    return;
  }





}
