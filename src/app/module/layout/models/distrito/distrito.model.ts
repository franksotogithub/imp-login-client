import { DistritoUI } from "./ui/distrito.ui";


export class DistritoModel implements  DistritoUI{
  disUbigeo?: string;
  disNombre?: string;
  constructor(d : DistritoUI){
    this.disUbigeo =d?.disUbigeo;
    this.disNombre = d?.disNombre;

  }

}
