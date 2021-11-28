import { prop } from "@rxweb/reactive-form-validators";
import { PerfilUI } from "./ui/perfil.ui";


export class PerfilModel implements PerfilUI {

  prfId: number | null | undefined;
  prfNombre: string | null | undefined;
  sisId: number | null | undefined;


constructor(p?:PerfilUI){
    this.prfId = p?.prfId;
    this.prfNombre = p?.prfNombre;
    this.sisId = p?.sisId;
  }

}
