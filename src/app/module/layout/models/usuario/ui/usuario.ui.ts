export interface UsuarioUI {

  usuId ?: number;
  perId ?: number;
  usuEmail ?:string;
  usuContrasenia?:string;
  ubigeo ?: string;
  usuActivo ?: number;

  perNombre1?: string;
  perNombre2?: string;
  perApellido1 ?:string;
  perApellido2 ?:string;
  perNroDoc ?:string;
  usuUltimoAcceso ?:string;
  insNombreAbrev ?:string;
}


export interface UsuarioPerfilUI
{
  usuId ?: number;
  prfId?: number;
  uspActivo?:number;

  prfNombre?:string;
  sisNombre ?:string;
}

/*


            "per_nombre1": "OPERADOR",
            "per_nombre2": "",
            "per_apellido1": "",
            "per_apellido2": "",
            "per_nro_doc": "00000000",
            "usu_email": "luchotorres23.imp@gmail.com",
            "usu_activo": true,
            "usu_ultimo_acceso": "2021-07-04 13:38:31.947182",
            "ins_id": 3,
            "ins_nombre_abrev": "MML",
            "ubigeo": "150101"

*/
