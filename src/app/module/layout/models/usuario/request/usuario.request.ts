export interface UsuarioRequest
{
  usu_id : number;
  per_id: number;
  usu_email :string;
  usu_contrasenia :string;
  ubigeo : string;
  usu_activo : number;
  per_nombre1: string;
  per_nombre2: string;
  per_apellido1 :string;
  per_apellido2 :string;
  per_nro_doc :string;
  usu_ultimo_acceso :string;
  ins_nombre_abrev :string;

}



export interface UsuarioPerfilRequest
{
  usu_id : number;
  prf_id: number;
  usp_activo:number;
  prf_nombre:string;
  sis_nombre :string;
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
