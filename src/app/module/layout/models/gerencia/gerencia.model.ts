import { GerenciaUI } from "./ui/gerencia.ui";

export class GerenciaModel implements  GerenciaUI{
  gerNombre?: string;
  gerNombreAbrev?: string;
  insId?:number;
  gerId?:number;
  constructor(g : GerenciaUI){
    this.gerNombre =g.gerNombre;
    this.gerNombreAbrev = g.gerNombreAbrev;
    this.insId = g.insId;
    this.gerId = g.gerId;
  }

}
