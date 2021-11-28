import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { prop, required } from "@rxweb/reactive-form-validators";
import { SistemaUI } from "./ui/sistema.ui";

export class SistemaModel implements SistemaUI {
/*
  @prop()
  @required({ message: '* Campo obligatorio' })
  username: string  | null | undefined ;
  @prop()
  @required({ message: '* Campo obligatorio' })
  @minLength({ message: '* Debe contener al menos 5 caracteres',value:5 })
  password: string  | null | undefined ;
*/
@prop()
sisId: number | null | undefined ;
@prop()
@required({ message: '* Campo obligatorio' })
sisNombre: string| null | undefined ;
@prop()
sisLogotipo: string| null | undefined ;


@prop()
@required({ message: '* Campo obligatorio' })
sisUrl: string| null | undefined ;

@prop()
sisDescripcion: string| null | undefined ;

@prop()
isValid: boolean = false;
constructor(s?:SistemaUI){
    this.sisId= s?.sisId;
    this.sisNombre = s?.sisNombre;
    this.sisLogotipo = s?.sisLogotipo;
    this.sisUrl = s?.sisUrl;
  this.sisDescripcion = s?.sisDescripcion;
  }

}
