import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { PrimeModule} from '@app/shared/prime/prime.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuAplicacionesComponent } from './components/menu-aplicaciones/menu-aplicaciones.component';
import { MenuAplicacionesPageComponent } from './pages/menu-aplicaciones-page/menu-aplicaciones-page.component';

import { UsuariosListPageComponent } from './pages/usuarios-list-page/usuarios-list-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/core/interceptor/token.interceptor';
import { SistemaListPageComponent } from './pages/sistema-list-page/sistema-list-page.component';
import { PerfilListPageComponent } from './pages/perfil-list-page/perfil-list-page.component';
import { UsuarioFormPageComponent } from './pages/usuario-form-page/usuario-form-page.component';
import { SistemaFormPageComponent } from './pages/sistema-form-page/sistema-form-page.component';
import { PerfilFormPageComponent } from './pages/perfil-form-page/perfil-form-page.component';
import { SistemaService } from '@app/module/layout/services/sistema/sistema.service';
import { SistemaApiService } from '@app/module/layout/services/sistema/sistema-api.service';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilService } from './services/perfil/perfil.service';
import { perfilApiService } from './services/perfil/perfil-api.service';
import { UsuarioService } from './services/usuario/usuario.service';
import { UsuarioApiService } from './services/usuario/usuario-api.service';
import { PersonaService } from './services/persona/persona.service';
import { PersonaApiService } from './services/persona/persona-api.service';
import { SharedModule } from '@app/shared/shared.module';
import { InstitucionService } from './services/institucion/institucion.service';
import { InstitucionApiService } from './services/institucion/institucion-api.service';
import { DistritoService } from './services/distrito/distrito.service';
import { DistritoApiService } from './services/distrito/distrito-api.service';
import { GerenciaService } from './services/gerencia/gerencia.service';
import { GerenciaApiService } from './services/gerencia/gerencia-api.service';
import { SubGerenciaService } from './services/sub_gerencia/subgerencia.service';
import { SubGerenciaApiService } from './services/sub_gerencia/subgerencia-api.service';


/*
import { HttpErrorInterceptor } from
*/
@NgModule({
  declarations: [    FooterComponent,
    HeaderComponent,
    LayoutPageComponent,
    MenuComponent,
    MenuAplicacionesComponent,
    MenuAplicacionesPageComponent,

    UsuariosListPageComponent,
     SistemaListPageComponent,
     PerfilListPageComponent,
     UsuarioFormPageComponent,
     SistemaFormPageComponent,
     PerfilFormPageComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PrimeModule,
    RxReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [

  {

      provide: SistemaService,
      useClass:SistemaApiService
    },
    {

      provide: PerfilService,
      useClass:perfilApiService
    },

    {

      provide: UsuarioService,
      useClass:UsuarioApiService
    },

    {

      provide: PersonaService,
      useClass:PersonaApiService
    },


    {

      provide: InstitucionService,
      useClass:InstitucionApiService
    },


    {

      provide: DistritoService,
      useClass:DistritoApiService
    },

    {

      provide: GerenciaService,
      useClass: GerenciaApiService
    },


    {

      provide: SubGerenciaService,
      useClass: SubGerenciaApiService
    },
  ]

})
export class LayoutModule { }
