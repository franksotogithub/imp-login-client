import { InstitucionUI } from "./ui/institucion.ui";

export class InstitucionModel implements  InstitucionUI{
  insId?:number;
  insRazonSocial?:string;
  insRuc?:string;
  insNombreAbrev?:string;
  constructor(i : InstitucionUI){
    this.insId =i?.insId;
    this.insRazonSocial = i?.insRazonSocial;
    this.insRuc = i?.insRuc;
    this.insNombreAbrev = i?.insNombreAbrev;
  }
}
