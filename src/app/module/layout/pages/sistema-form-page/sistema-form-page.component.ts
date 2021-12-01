import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '@app/global/constants';

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { PerfilModel } from '../../models/perfil/perfil.model';
import { PerfilUI } from '../../models/perfil/ui/perfil.ui';
import { SistemaModel } from '../../models/sistema/sistema.model';
import { PerfilService } from '../../services/perfil/perfil.service';
import { SistemaService } from '../../services/sistema/sistema.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { FileUpload } from 'primeng/fileupload';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-sistema-form-page',
  templateUrl: './sistema-form-page.component.html',
  styleUrls: ['./sistema-form-page.component.scss'],
  providers :[ConfirmationService]
})
export class SistemaFormPageComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: FileUpload;
  @Input() sistemaModel !:SistemaModel  ;
  title :string='';
  currentPage:string ='';
  sistemaFormGroup!:any ;
  perfiles !: PerfilUI[] ;
  loading: boolean = false;
  display :boolean = false;
  titlePerfil:string ='';
  perfil !: PerfilModel;
  promiseList:any[] = [];
  uploadedFiles: any[] =[];
  constructor(  private formBuilder: RxFormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private sistemaService:SistemaService,

    private perfilService: PerfilService,
    private confirmationService: ConfirmationService,


    ) {

      this.settingPage();

      this.settingForm();
    }

  ngOnInit(): void {
  }

  settingPage(){
    this.title = 'Nuevo Sitema';
    this.activeRouter.url
      .subscribe(response=>{
        this.currentPage = response[response.length - 1].path;



        switch (this.currentPage) {
          case  Constants.PATH_CREATE:
            this.title ='Nuevo Sitema';
            this.sistemaModel =new SistemaModel();
            /*this.perfiles =[];*/
            break;

          case  Constants.PATH_UPDATE:
            this.title ='Actualizar Sistema';
            this.listerParams();
            break;

        }
        console.log('this.currentPage>>>',this.currentPage);
      });
  }

  listerParams(){
    this.activeRouter.params.subscribe(params=>{
        let idSistema=params['idSistema'];
        this.sistemaService.sistemaGet(idSistema)?.subscribe(res=>{
          console.log('res>>',res)
          this.sistemaModel = new SistemaModel( res);

          console.log('this.sistemaModel>>>',this.sistemaModel);
        });


    });

  }



  settingForm(): void {
    this.sistemaFormGroup = this.formBuilder.formGroup(new SistemaModel());

    this.sistemaFormGroup.valueChanges.subscribe((change:any) => {

      this.sistemaModel.isValid = this.sistemaFormGroup.valid;

     });

  }

  save(){


    this.promiseList = [];

    this.confirmationService.confirm({
      message: 'Esta seguro que desea guardar la informacion?',
      accept: () => {
        if(this.fileInput.files.length>0){
          let file =this.fileInput.files[0]
          this.sistemaService.sistemaSubirFoto(file)?.subscribe((res)=>{


            if(res){
              this.sistemaModel.sisLogotipo = res.filename;
            }
            this.sistemaService.sistemaUpdate(this.sistemaModel)?.subscribe((res)=>{


              this.regresar();
            });

          });
        }

        else{

          this.sistemaModel.sisLogotipo=null;
          this.sistemaService.sistemaUpdate(this.sistemaModel)?.subscribe((res)=>{


            this.regresar();
          });
        }
      },
      acceptLabel: 'Si',
    });




  }

  regresar(){
    this.router.navigate(['sistema']);
  }



onUpload(event:any) {
  console.log('event>>>',event);
  for(let file of event.files) {
      console.log('file>>',file);
      this.uploadedFiles.push(file);
  }


  }
}
