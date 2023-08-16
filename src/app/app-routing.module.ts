import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRemoveComponent } from './create-remove/create-remove.component';
import { MyConditionComponent } from './my-condition/my-condition.component';
import { AddusersComponent } from './addusers/addusers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorepageComponent } from './errorepage/errorepage.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContantComponent } from './contant/contant.component';
import { ParentsComponent } from './parents/parents.component';
import { AboutComponent } from './about/about.component';
import { Parent01Component } from './exercise/parent01/parent01.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component: MyConditionComponent },
  {path:'login', component:LoginPageComponent},
  {path:'Addremovee', component: CreateRemoveComponent},
  {path:'users', component:AddusersComponent},
  {path:'card', component: ContantComponent},
  {path:'buy-products', component:ParentsComponent},
  {path:'about', component:AboutComponent},
  {path:'exercise', component:Parent01Component},
  {path:'**', component:ErrorepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
