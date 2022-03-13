import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';

import { LoginFormComponent } from './module/login/components/login-form/login-form.component';

const routes: Routes = [
  {
    path: 'login',


    loadChildren :() => import('./module/login/login.module').then(m=> m.LoginModule),
  },


  {
    path: '',
    loadChildren :() => import('./module/layout/layout.module').then(m=> m.LayoutModule),
    canActivate:[LoginGuard]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
