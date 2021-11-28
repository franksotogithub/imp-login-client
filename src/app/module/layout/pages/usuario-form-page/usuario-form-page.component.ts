import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '@app/global/constants';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { lessThanAsyncValidatorExtension } from '@rxweb/reactive-form-validators/validators-extension';
import { PerfilUI } from '../../models/perfil/ui/perfil.ui';
import { PersonaModel } from '../../models/persona/persona.model';
import { SistemaUI } from '../../models/sistema/ui/sistema.ui';
import { UsuarioPerfilUI } from '../../models/usuario/ui/usuario.ui';
import { ChangePasswordModel, UsuarioModel, UsuarioPerfilModel, UsuarioUpdateModel } from '../../models/usuario/usuario.model';
import { PerfilService } from '../../services/perfil/perfil.service';
import { PersonaService } from '../../services/persona/persona.service';
import { SistemaService } from '../../services/sistema/sistema.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { InstitucionUI } from '../../models/institucion/ui/institucion.ui';
import { InstitucionService } from '../../services/institucion/institucion.service';
import { DistritoUI } from '../../models/distrito/ui/distrito.ui';
import { DistritoService } from '../../services/distrito/distrito.service';
import { GerenciaService } from '../../services/gerencia/gerencia.service';
import { SubGerenciaService } from '../../services/sub_gerencia/subgerencia.service';
import { GerenciaUI } from '../../models/gerencia/ui/gerencia.ui';
import { SubGerenciaUI } from '../../models/sub_gerencia/ui/sub_gerencia.ui';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario-form-page',
  templateUrl: './usuario-form-page.component.html',
  styleUrls: ['./usuario-form-page.component.scss'],
  providers: [ConfirmationService],
})
export class UsuarioFormPageComponent implements OnInit {
  title :string='';
  currentPage:string ='';
  usuarioModel!: UsuarioModel ;
  personaModel!:PersonaModel;
  changePasswordModel!: ChangePasswordModel;
  usuarioPerfiles!:UsuarioPerfilUI[];
  usuarioFormGroup !:any;
  usuarioUpdateFormGroup !:any;
  personaFormGroup !: any;
  passwordFormGroup!:any;
  usuarioPerfil!:UsuarioPerfilUI;
  sistemas!:SistemaUI[];

  sistema !:SistemaUI;
display=false;
titlePerfil:string ='';

perfiles : PerfilUI[] =[];
perfil!: PerfilUI;
usuarioPerfilesRemove: number[]=[];
promiseList:any[]=[];

usuarioPerfilesTemp:UsuarioPerfilUI[]=[];

instituciones: InstitucionUI[]=[];
usuarioValid: boolean= false;
personaValid: boolean= false;
isEdit:boolean=false;
displayDialogPassword=false ;
distritos:DistritoUI[] = [];
gerencias:GerenciaUI[]=[];
subgerencias: SubGerenciaUI[]=[];
  constructor(private formBuilder: RxFormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private usuarioService: UsuarioService,
    private sistemaService: SistemaService,
    private perfilService: PerfilService,
    private personaService: PersonaService,
    private institucionService: InstitucionService,
    private distritoService: DistritoService,
    private gerenciaService : GerenciaService,
    private subGerenciaService: SubGerenciaService,

    private confirmationService: ConfirmationService
    ) { }

  ngOnInit(): void {

    this.settingPage();
    this.settingForm();
  }
  settingPage(){
    this.sistemaList();
    this.institucionList();
    this.distritoList();
    this.title = 'Nuevo Usuario';
    this.changePasswordModel = new ChangePasswordModel();
    this.activeRouter.url
      .subscribe(response=>{
        this.currentPage = response[response.length - 1].path;

        switch (this.currentPage) {
          case  Constants.PATH_CREATE:
            this.title ='Nuevo Usuario';
            this.usuarioModel = new UsuarioModel();
            this.personaModel =new PersonaModel();
            this.usuarioPerfiles =[];
            this.isEdit =false;
            break;

          case  Constants.PATH_UPDATE:

            this.title ='Actualizar Usuario';
            this.listerParams();
            this.isEdit =true;

            break;

        }
        console.log('this.currentPage>>>',this.currentPage);
      });
  }

  listerParams(){

    this.activeRouter.params.subscribe(params=>{
        let idUsuario=params['idUsuario'];
        this.usuarioService.usuarioGet(idUsuario)?.subscribe(res=>{
          this.usuarioModel = res;
          this.changePasswordModel.usuId = this.usuarioModel.usuId;

          if(this.usuarioModel ){
            if( this.usuarioModel.perId){
              this.personaService.personaGet(this.usuarioModel.perId)?.subscribe(res=>{
                this.personaModel = res;

              });
            }


            if(this.usuarioModel.usuId){
              this.usuarioService.usuarioPerfilList(this.usuarioModel.usuId)?.subscribe(res=>{
                if(res)
                  this.usuarioPerfiles = res;

              })
            }


          }



        })



    });

  }

  sistemaList(){
    this.sistemaService.sistemaList()?.subscribe(res=>{
      this.sistemas =res;
    });
  }

  distritoList(){
    this.distritoService.distritoList()?.subscribe(res=>{
      this.distritos =res;
    });
  }


  gerenciaList(insId:number){
    this.gerenciaService.gerenciaList(insId)?.subscribe(res=>{
this.gerencias =res;
    });
  }

  subgerenciaList(gerId:number){
    this.subGerenciaService.subGerenciaList(gerId)?.subscribe(res=>{
this.subgerencias =res;
    });
  }
  institucionList(){
    this.institucionService.institucionList()?.subscribe(res=>{
      this.instituciones =res;
    })
  }

  changeInstitucion(e:any){
    if(this.personaModel.insId){
      this.gerenciaList(this.personaModel.insId);

    }

  }


  changeGerencia(e:any){

    if(this.personaModel.gerId){
      this.subgerenciaList(this.personaModel.gerId);
    }


  }
  settingForm(): void {



    this.personaFormGroup = this.formBuilder.formGroup(new PersonaModel());
    this.passwordFormGroup =this.formBuilder.formGroup(new ChangePasswordModel());

    if(this.isEdit){
      this.usuarioUpdateFormGroup =this.formBuilder.formGroup(new UsuarioUpdateModel());
      this.usuarioUpdateFormGroup.get('usuEmail').disable();
      this.usuarioUpdateFormGroup.valueChanges.subscribe((change:any) => {

        this.usuarioValid = this.usuarioUpdateFormGroup.valid;

       });
    }

    else{
      this.usuarioFormGroup =this.formBuilder.formGroup(new UsuarioModel());

      this.usuarioFormGroup.valueChanges.subscribe((change:any) => {

        this.usuarioValid = this.usuarioFormGroup.valid;

       });
    }






     this.personaFormGroup.valueChanges.subscribe((change:any) => {

      this.personaValid = this.personaFormGroup.valid;

     });
  }



  actualizarAcceso(perfil: UsuarioPerfilUI){
    this.titlePerfil ='Actualizar Perfil';
    this.display =true;
    this.usuarioPerfil = perfil;
    if(this.usuarioPerfil &&  this.usuarioPerfil.prfId){
      this.getPerfil(this.usuarioPerfil.prfId);
    }

  }


  crearAcceso(){
    this.titlePerfil ='Añadir Rol';
    this.display =true;
    this.usuarioPerfil = new UsuarioPerfilModel();

  }

  eliminarAcceso(perfil:UsuarioPerfilUI,index:number){


    if (this.usuarioPerfiles.length > 1) {

      perfil.prfId?this.usuarioPerfilesRemove.push(perfil.prfId):null;

      this.usuarioPerfiles.splice(index, 1);
    } else {
      perfil.prfId?this.usuarioPerfilesRemove.push(perfil.prfId):null;
      this.usuarioPerfiles=[];

    }
  }

  savePerfil(){

    this.usuarioPerfilesTemp.push(this.usuarioPerfil);

    this.usuarioPerfiles.push(this.usuarioPerfil);
    this.display =false;

  }


  onChangeSistema(evt:any){
    console.log('this.sistema>>>',this.sistema);
    if (this.sistema.sisId) {
      this.getPerfiles(this.sistema.sisId);
    }
  }

  onChangePerfil(evt:any){
    if (this.sistema.sisNombre && this.usuarioPerfil ) {

      this.usuarioPerfil.sisNombre= this.sistema.sisNombre;
    }
  }

  getPerfiles(idSistema:number){

    this.perfilService.perfilList(idSistema)?.subscribe(res=>{
      if(res){
        this.perfiles =res;
      }
    });

  }


  getPerfil(idPerfil:number){

    this.perfilService.perfilGet(idPerfil)?.subscribe(res=>{
      if(res){
        this.perfil =res;
        if(this.perfil.sisId)
        this.sistemaService.sistemaGet(this.perfil.sisId)?.subscribe(res=>{
          this.sistema=res;
        });
      }
    });

  }

  saveUsuarioPerfiles(usuarioPerfiles:UsuarioPerfilUI[]){

    this.promiseList =[];

    if(usuarioPerfiles && usuarioPerfiles.length>0){
      usuarioPerfiles.forEach(up=>{
        this.promiseList.push(this.usuarioService.usuarioPerfilUpdate(up));
      })


    }
    if (this.promiseList.length) {
      forkJoin(this.promiseList).subscribe(
        (resList) => {

          resList.forEach((res) => {

            console.log(res);
          });


        },
        (err) => {
          console.log(err);
        }
      );
    }

  }


  removeUsuariosPerfiles(usuarioPerfilesRemove:number[]){
    this.promiseList =[];
    if(usuarioPerfilesRemove && usuarioPerfilesRemove.length>0){
      usuarioPerfilesRemove.forEach(up=>{
        this.promiseList.push(this.usuarioService.usuarioPerfilDelete(up));
      })


    }


    if (this.promiseList.length) {
      forkJoin(this.promiseList).subscribe(
        (resList) => {

          resList.forEach((res) => {

            console.log(res);
          });


        },
        (err) => {
          console.log(err);
        }
      );
    }


  }

  saveUsuario(){
    this.confirmationService.confirm({
      message: 'Esta seguro que desea guardar la informacion?',
      accept: () => {

        switch (this.currentPage) {
          case  Constants.PATH_UPDATE:
            this.personaService.personaUpdate(this.personaModel)?.subscribe((res:any)=>{
              if(res&& res.id){

                this.usuarioService.usuarioUpdate(this.usuarioModel)?.subscribe((res:any)=>{
                  console.log('this.usuarioPerfilesTemp>>>',this.usuarioPerfilesTemp);

                  if(res && res.id){

                    this.usuarioPerfilesTemp.map((up)=>{
                      up.usuId= this.usuarioModel.usuId;
                      up.uspActivo=1;
                    });

                    this.saveUsuarioPerfiles(this.usuarioPerfilesTemp);
                    this.removeUsuariosPerfiles(this.usuarioPerfilesRemove);
                    this.regresar();
                  }
                })
              }
            });

            break;
          case  Constants.PATH_CREATE:
            this.personaService.personaUpdate(this.personaModel)?.subscribe((res:any)=>{
              if(res&& res.id){
                this.usuarioModel.perId = res.id;


                this.usuarioService.usuarioCreate(this.usuarioModel)?.subscribe((res:any)=>{
                  if(res && res.id){

                    this.usuarioPerfilesTemp.map((up)=>{
                      up.usuId= res.id;
                      up.uspActivo=1;
                    });


                    this.saveUsuarioPerfiles(this.usuarioPerfilesTemp);
                    this.removeUsuariosPerfiles(this.usuarioPerfilesRemove);
                    this.regresar();
                  }
                })
              }
            });

            break;




        }

      },
      acceptLabel: 'Si',
    });



  }

  regresar(){
    this.router.navigate(['usuario']);
  }

  changePassword(){
    this.changePasswordModel = new ChangePasswordModel();
    this.displayDialogPassword=true;
  }

  savePassword(){

    this.usuarioService.usuarioChangePassword(this.changePasswordModel)?.subscribe((res:any)=>{
      console.log('this.usuarioPerfilesTemp>>>',this.usuarioPerfilesTemp);

      if(res && res.id){
        this.displayDialogPassword=false;


      }
    })
  }
}
