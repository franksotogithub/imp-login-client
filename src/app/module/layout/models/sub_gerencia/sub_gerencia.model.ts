import { SubGerenciaUI } from "./ui/sub_gerencia.ui";


export class SubGerenciaModel implements  SubGerenciaUI{
  sgeNombre?: string;
  sgeNombreAbrev?: string;
  gerId?:number;
  sgeId?:number;
  constructor(g : SubGerenciaUI){
    this.sgeNombre =g.sgeNombre;
    this.sgeNombreAbrev = g.sgeNombreAbrev;
    this.gerId = g.gerId;
    this.sgeId = g.sgeId;
  }

}
