import { compare, prop, required } from "@rxweb/reactive-form-validators";

import { UsuarioPerfilUI, UsuarioUI } from "./ui/usuario.ui";

export class UsuarioModel implements UsuarioUI {

  usuId ?: number;
  perId ?: number;
  @prop()
  @required({ message: '* Campo obligatorio' })
  usuEmail ?:string;
  @prop()
  @required({ message: '* Campo obligatorio' })
  usuContrasenia?:string;
  @prop()
  @required({ message: '* Campo obligatorio' })
  @compare({fieldName:'usuContrasenia',message: '* Repita la contraseña'})
  usuContrasenia2?:string;
  @prop()
  ubigeo ?: string;
  usuActivo ?: number;
  perNombre1?: string;
  perNombre2?: string;
  perApellido1 ?:string;
  perApellido2 ?:string;
  perNroDoc ?:string;
  usuUltimoAcceso ?:string;
  insNombreAbrev ?:string;
constructor(u?:UsuarioUI){
    this.usuId= u?.usuId;
    this.perId = u?.perId;
    this.usuEmail= u?.usuEmail;
    this.usuContrasenia = u?.usuContrasenia;
    this.ubigeo = u?.ubigeo;
    this.usuActivo = u?.usuActivo;
    this.perNombre1 =u?.perNombre1;
  this.perNombre2 =u?.perNombre2;
  this.perApellido1 =u?.perApellido1;
  this.perApellido2 =u?.perApellido2;
  this.perNroDoc =u?.perNroDoc;
  this.usuUltimoAcceso =u?.usuUltimoAcceso;
  this.insNombreAbrev =u?.insNombreAbrev;


  }

}


export class UsuarioUpdateModel implements UsuarioUI {

  usuId ?: number;
  @prop()
  @required({ message: '* Campo obligatorio' })
  usuEmail ?:string;
  @prop()
  ubigeo ?: string;

constructor(u?:UsuarioUI){
    this.usuId= u?.usuId;
      this.usuEmail= u?.usuEmail;
      this.ubigeo = u?.ubigeo;
  }

}


export class ChangePasswordModel  {

  usuId ?: number;

  @prop()
  @required({ message: '* Campo obligatorio' })
  usuContrasenia ?:string;
  @prop()
  @required({ message: '* Campo obligatorio' })
  @compare({fieldName:'usuContrasenia',message: '* Repita la contraseña'})
  usuContrasenia2 ?:string;

constructor(){


}

}







export class UsuarioPerfilModel implements UsuarioPerfilUI {
  usuId?: number;
  prfId?: number;
  uspActivo?: number;
  prfNombre?: string;
  sisNombre?: string;

  constructor(u?:UsuarioPerfilUI){
    this.usuId= u?.usuId;
    this.prfId = u?.prfId;
    this.uspActivo = u?.uspActivo;
    this.prfNombre = u?.prfNombre;
    this.sisNombre = u?.sisNombre;



  }


}
