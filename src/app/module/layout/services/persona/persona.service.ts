import { Injectable } from '@angular/core';



import { Observable } from 'rxjs';
import { PersonaModel } from '../../models/persona/persona.model';
import { PersonaUI } from '../../models/persona/ui/persona.ui';


@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}

  public personaList( ): Observable<PersonaUI[]>| null | undefined {
    return;
  }

  public personaGet(id:number):Observable<PersonaUI>| null | undefined {
    return;
  }

  public personaUpdate( Persona: PersonaModel ): Observable<PersonaUI>| null | undefined {

    return;
  }

  public personaDelete(id:number): Observable<boolean>| null | undefined {

    return;
  }



  public personaSubirFoto(file:any): Observable<any>| null | undefined {

    return;
  }
}
