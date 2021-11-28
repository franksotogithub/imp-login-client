import { environment} from '@env/environment';

export class EndPoints
{
  public static get BASE_ENDPOINT():string { return environment.apiUrl};



  public static get LOGIN():string {return `${this.BASE_ENDPOINT}/login` }
  public static get SISTEMA_LIST():string {return `${this.BASE_ENDPOINT}/sel_sistema` }

  public static get SISTEMA_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_sistema` }
  public static get SISTEMA_DELETE():string {return `${this.BASE_ENDPOINT}/del_sistema` }
  public static get UPLOAD():string {return `${this.BASE_ENDPOINT}/upload` }
  public static get PERFIL_LIST():string {return `${this.BASE_ENDPOINT}/sel_perfil` }
  public static get PERFIL_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_perfil` }
  public static get PERFIL_DELETE():string {return `${this.BASE_ENDPOINT}/del_perfil` }
  public static get USUARIO_LIST():string {return `${this.BASE_ENDPOINT}/sel_usuario` }
  public static get USUARIO_CREATE():string {return `${this.BASE_ENDPOINT}/ins_usuario` }
  public static get USUARIO_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_usuario` }
  public static get USUARIO_ACTIVACION():string {return `${this.BASE_ENDPOINT}/des_usuario` }
  public static get USUARIO_PERFIL_LIST():string {return `${this.BASE_ENDPOINT}/sel_usuario_perfil` }
  public static get USUARIO_PERFIL_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_usuario_perfil` }
  public static get USUARIO_PERFIL_ACTIVACION():string {return `${this.BASE_ENDPOINT}/des_usuario_perfil` }
  public static get PERSONA_LIST():string {return `${this.BASE_ENDPOINT}/sel_persona` }
  public static get PERSONA_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_persona` }
  public static get INSTITUCION_LIST():string {return `${this.BASE_ENDPOINT}/sel_institucion` }
  public static get INSTITUCION_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_institucion` }
  public static get GERENCIA_LIST():string {return `${this.BASE_ENDPOINT}/sel_gerencia` }
  public static get GERENCIA_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_gerencia` }

  public static get SUBGERENCIA_LIST():string {return `${this.BASE_ENDPOINT}/sel_subgerencia` }
  public static get SUBGERENCIA_UPDATE():string {return `${this.BASE_ENDPOINT}/upd_subgerencia` }
  public static get DISTRITO_LIST():string{return `${this.BASE_ENDPOINT}/sel_distrito`}

}
