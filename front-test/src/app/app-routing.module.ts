import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent}from './vistas/login/login.component'
import { AdminComponent } from './vistas/admin/admin.component';
import { UserComponent } from './vistas/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,AdminComponent,UserComponent]