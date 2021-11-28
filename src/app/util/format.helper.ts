import { LoginModel } from "@app/module/login/models/login.model";

import { GeneralSessionRequest } from "@app/module/login/models/request/generalSession.request";
import { LoginRequest } from "@app/module/login/models/request/login.request";
import { SessionRequest } from "@app/module/login/models/request/session.request";

import { GeneralSessionUI } from "@app/module/login/models/ui/generalSession.ui";
import { SessionUI } from "@app/module/login/models/ui/session.ui";

import { AppUI } from "@app/module/login/models/ui/app.ui";
import { AppRequest } from "@app/module/login/models/request/app.request";
import { SistemaRequest } from "@app/module/layout/models/sistema/request/sistema.request";
import { SistemaUI } from "@app/module/layout/models/sistema/ui/sistema.ui";
import { PerfilRequest } from "@app/module/layout/models/perfil/request/perfil.request";
import { PerfilUI } from "@app/module/layout/models/perfil/ui/perfil.ui";
import { UsuarioPerfilUI, UsuarioUI } from "@app/module/layout/models/usuario/ui/usuario.ui";
import { UsuarioPerfilRequest, UsuarioRequest } from "@app/module/layout/models/usuario/request/usuario.request";
import { PersonaUI } from "@app/module/layout/models/persona/ui/persona.ui";
import { PersonaRequest } from "@app/module/layout/models/persona/request/persona.request";
import { InstitucionRequest } from "@app/module/layout/models/institucion/request/institucion.request";
import { InstitucionUI } from "@app/module/layout/models/institucion/ui/institucion.ui";
import { DistritoRequest } from "@app/module/layout/models/distrito/request/distrito.request";
import { DistritoUI } from "@app/module/layout/models/distrito/ui/distrito.ui";
import { GerenciaRequest } from "@app/module/layout/models/gerencia/request/gerencia.request";
import { GerenciaUI } from "@app/module/layout/models/gerencia/ui/gerencia.ui";
import { SubGerenciaRequest } from "@app/module/layout/models/sub_gerencia/request/sub_gerencia.request";
import { SubGerenciaUI } from "@app/module/layout/models/sub_gerencia/ui/sub_gerencia.ui";

export class FormatHelper {


  public static formatRequestLogin( login: LoginModel ): LoginRequest{
    return {
      u: login.username,
      p: login.password
    } as LoginRequest;
  }

  public static formatResponseDistrito(d:DistritoRequest): DistritoUI{
    return {
        disNombre: d.dis_nombre,
        disUbigeo: d.dis_ubigeo

    } as DistritoUI
  }


  public static  formatResponseGerencia(g:GerenciaRequest): GerenciaUI{
    return {
      gerNombre:g.ger_nombre,
      gerNombreAbrev:g.ger_nombre_abrev,
      insId : g.ins_id,
      gerId :g.ger_id

    } as GerenciaUI
  }

  public static  formatResponseSubGerencia(g:SubGerenciaRequest): SubGerenciaUI{
    return {
      sgeNombre:g.sge_nombre,
      sgeNombreAbrev:g.sge_nombre_abrev,
      gerId :g.ger_id,
      sgeId : g.sge_id

    } as SubGerenciaUI
  }


  public static formatResponseSession( session: SessionRequest ): SessionUI{
    return {

      usuId: session.usu_id,
      usuActivo: session.usu_activo,
      usuEmail: session.usu_email,
      usuUltimoAcceso: session.usu_ultimo_acceso,
      usuNombre: session.usu_nombre,
      sgeId: session.sge_id,
      sgeNombre: session.sge_nombre,
      gerId: session.ger_id,
      gerNombre: session.ger_nombre,
      insId: session.ins_id,
      insNombreAbrev: session.ins_nombre_abrev,
      perId: session.per_id,
      ubigeo: session.ubigeo,
      token: session.token


    } as SessionUI;
  }

/*

  public static formatResponseSistema( app: SistemaRequest ): SistemaUI{
    return {
      prfId : app.prf_id,
      prfNombre : app.prf_nombre,
      sisId : app.sis_id,
      sisLogotipo : app.sis_logotipo,
      sisNombre : app.sis_nombre,
      sisUrl : app.sis_url

    } as SistemaUI;
  }
*/


  public static formatResponseApp( app: AppRequest ): AppUI{
    return {
      prfId : app.prf_id,
      prfNombre : app.prf_nombre,
      sisId : app.sis_id,
      sisLogotipo : app.sis_logotipo,
      sisNombre : app.sis_nombre,
      sisUrl : app.sis_url

    } as AppUI;
  }

  public static formatResponseGeneralSession(generalSession: GeneralSessionRequest) : GeneralSessionUI{


    let apps=generalSession.apps.map((g)=>{ return this.formatResponseApp(g) });
    let  session =this.formatResponseSession( generalSession.sesion);

    return {
      apps:apps,
      sesion:session,
      message:generalSession.message,
      status:generalSession.status
    } as GeneralSessionUI


  }


  public static formatResponseSitema(s: SistemaRequest) : SistemaUI{



    return {

   sisId:s.sis_id,
   sisLogotipo:s.sis_logotipo,
   sisNombre:s.sis_nombre,
   sisUrl :s.sis_url,
   sisDescripcion: s.sis_descripcion
    } as SistemaUI


  }



  public static formatResponseInstitucion(s: InstitucionRequest) : InstitucionUI{



    return {

      insNombreAbrev:s.ins_nombre_abrev,
      insId : s.ins_id,
      insRazonSocial:s.ins_razon_social,
      insRuc : s.ins_ruc

    } as InstitucionUI


  }




  public static formatRequestInstitucion(s: InstitucionUI) : InstitucionRequest{



    return {

   ins_id: s.insId,
   ins_nombre_abrev:s.insNombreAbrev,
   ins_razon_social:s.insRazonSocial,
   ins_ruc :s.insRuc

    } as InstitucionRequest


  }


  public static formatResponsePerfil(p: PerfilRequest) : PerfilUI{



    return {
      prfId: p.prf_id,
      prfNombre : p.prf_nombre,
      sisId : p.sis_id

    } as PerfilUI


  }



  public static formatResponseUsuario(u : UsuarioRequest ) : UsuarioUI{



    return {
      perId : u.per_id,
      ubigeo : u.ubigeo,
      usuActivo : u.usu_activo,
      usuContrasenia : u.usu_contrasenia,
      usuEmail : u.usu_email,
      usuId : u.usu_id,
      insNombreAbrev: u.ins_nombre_abrev,
      perApellido1 : u.per_apellido1,
      perApellido2 : u.per_apellido2,
      perNombre1 : u.per_nombre1,
      perNombre2 : u.per_nombre2,
      perNroDoc : u.per_nro_doc,
      usuUltimoAcceso : u.usu_ultimo_acceso

    } as UsuarioUI


  }


  public static formatResponsePersona(p : PersonaRequest ) : PersonaUI{



    return {
      insId: p.ins_id,
      perApellido1:p.per_apellido1,
      perApellido2:p.per_apellido2,
      perEmail : p.per_email,
      perId : p.per_id,
      perNombre1 : p.per_nombre1,
      perNombre2 : p.per_nombre2,
      perNroDoc : p.per_nro_doc,
      perTelefono1 : p.per_telefono1 ,
      perTipoDoc : p.per_tipo_doc ,
      sgeId : p.sge_id,
      gerId: p.ger_id

    } as PersonaUI


  }


  public static formatResponseUsuarioPerfil(p : UsuarioPerfilRequest ) : UsuarioPerfilUI{



    return {

      prfId : p.prf_id,
      prfNombre : p.prf_nombre,
      sisNombre : p.sis_nombre,
      uspActivo : p.usp_activo,
      usuId : p.usu_id
    } as UsuarioPerfilUI


  }


  public static formatRequestPerfil(p: PerfilUI) : PerfilRequest{

    return {
      prf_id : p.prfId,
      prf_nombre : p.prfNombre,
      sis_id : p.sisId

    } as PerfilRequest

  }


  public static formatRequestSistema(s: SistemaUI) : SistemaRequest {
    return {

      sis_id : s.sisId,
      sis_logotipo: s.sisLogotipo,
      sis_nombre: s.sisNombre,
      sis_url : s.sisUrl,
      sis_descripcion : s.sisDescripcion

    }
  }

  public static formatRequestUsuario(u: UsuarioUI) : UsuarioRequest{

    return {
  per_id: u.perId,
  ubigeo : u.ubigeo,
  usu_activo : u.usuActivo,
  usu_contrasenia: u.usuContrasenia,
  usu_email: u.usuEmail,
  usu_id: u.usuId

    } as UsuarioRequest

  }
  public static formatRequestPersona(p: PersonaUI) : PersonaRequest{

    return {
        ins_id: p.insId,
        sge_id :p.sgeId,
        per_apellido1 :p.perApellido1,
        per_apellido2 :p.perApellido2,
        per_email :p.perEmail,
        per_id : p.perId,
        per_nombre1 : p.perNombre1,
        per_nombre2 : p.perNombre2,
        per_nro_doc : p.perNroDoc,
        per_telefono1: p.perTelefono1,
        per_tipo_doc : p.perTipoDoc,
        ger_id : p.gerId

    } as PersonaRequest

  }



  public static formatRequestUsuarioPerfil(p: UsuarioPerfilUI) : UsuarioPerfilRequest{

    return {
      usu_id: p.usuId,
      prf_id : p.prfId,
      usp_activo : p.uspActivo,
      prf_nombre : p.prfNombre,
      sis_nombre : p.sisNombre

    } as UsuarioPerfilRequest

  }


}
