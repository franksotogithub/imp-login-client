import { Injectable } from '@angular/core';
/*import { perfilModel } from '@app/module/layout/models/perfil/perfil.model';
import { perfilUI } from '@app/module/layout/models/perfil/ui/perfil.ui';
*/

import { Observable } from 'rxjs';
import { PerfilModel } from '../../models/perfil/perfil.model';
import { PerfilUI } from '../../models/perfil/ui/perfil.ui';


@Injectable({
  providedIn: 'root',
})
export class PerfilService {


  constructor() {}


  public perfilList(idSistema:number ): Observable<PerfilUI[]>| null | undefined {
    return;
  }

  public perfilGet( idPerfil:number): Observable<PerfilUI>| null | undefined {
    return;
  }

  public perfilUpdate( perfil: PerfilModel ): Observable<boolean>| null | undefined {

    return;
  }

  public perfilDelete(id:number): Observable<boolean>| null | undefined {

    return;
  }


}
