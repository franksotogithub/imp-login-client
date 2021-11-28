import { prop, required } from "@rxweb/reactive-form-validators";
import { PersonaUI } from "./ui/persona.ui";



export class PersonaModel implements PersonaUI {
  perId ?:number;
  @prop()
@required({ message: '* Campo obligatorio' })
  perTipoDoc ?:number;
  @prop()
  @required({ message: '* Campo obligatorio' })
 perNroDoc ?:string;
 @prop()
 @required({ message: '* Campo obligatorio' })
 perNombre1 ?:string;
perNombre2 ?:string;

@prop()
@required({ message: '* Campo obligatorio' })
perApellido1 ?:string;
@prop()
@required({ message: '* Campo obligatorio' })
perApellido2 ?:string;

perEmail ?:string;
@prop()

perTelefono1 ?: string;

@prop()
@required({ message: '* Campo obligatorio' })
insId ?:number;

@prop()
sgeId ?:number;

@prop()
gerId ?:number;


constructor(p?:PersonaUI){
  this.perId =p?.perId;
  this.perTipoDoc =p?.perTipoDoc;

this.perNroDoc =p?.perNroDoc;
this.perNombre1 =p?.perNombre1;

this.perNombre2 =p?.perNombre2;
this.perApellido1 =p?.perApellido1;
this.perApellido2 =p?.perApellido2;
this.perEmail =p?.perEmail;
this.perTelefono1 = p?.perTelefono1;
this.insId =p?.insId;
this.sgeId =p?.sgeId;
this.gerId = p?.gerId
this.perTipoDoc =1;

  }

}
