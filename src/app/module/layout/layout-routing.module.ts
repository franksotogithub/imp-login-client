import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MenuAplicacionesPageComponent } from './pages/menu-aplicaciones-page/menu-aplicaciones-page.component';
import { PerfilListPageComponent } from './pages/perfil-list-page/perfil-list-page.component';
import { SistemaFormPageComponent } from './pages/sistema-form-page/sistema-form-page.component';
import { SistemaListPageComponent } from './pages/sistema-list-page/sistema-list-page.component';
import { UsuarioFormPageComponent } from './pages/usuario-form-page/usuario-form-page.component';
import { UsuariosListPageComponent } from './pages/usuarios-list-page/usuarios-list-page.component';

const routes: Routes = [  {
  path: '',
  component: LayoutPageComponent,
  children: [
    {
      path: '',
      redirectTo:'aplicaciones'
    },
    {
      path: 'aplicaciones',
      component: MenuAplicacionesPageComponent

    },

    {
      path: 'usuario',
      component: UsuariosListPageComponent

    },

    {
      path: 'usuario/:idUsuario/update',
      component: UsuarioFormPageComponent

    },

    {
      path: 'usuario/create',
      component: UsuarioFormPageComponent

    },

    {
      path: 'sistema',
      component: SistemaListPageComponent

    },
    {
      path: 'sistema/create',
      component: SistemaFormPageComponent

    },
    {
      path: 'sistema/:idSistema/update',
      component: SistemaFormPageComponent

    },

    {
      path: 'perfil',
      component: PerfilListPageComponent

    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
