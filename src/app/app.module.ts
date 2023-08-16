import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyConditionComponent } from './my-condition/my-condition.component';
import { CreateRemoveComponent } from './create-remove/create-remove.component';
import { createTemplateData } from '@angular/core/src/view/refs';
import { AddusersComponent } from './addusers/addusers.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorepageComponent } from './errorepage/errorepage.component';
import { ContantComponent } from './contant/contant.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';
import { ParentsComponent } from './parents/parents.component';
import { Parent01Component } from './exercise/parent01/parent01.component';
import { Child01Component } from './exercise/child01/child01.component';


@NgModule({
  declarations: [
    AppComponent,
    MyConditionComponent,
    CreateRemoveComponent,
    AddusersComponent,
    LoginPageComponent,
    ErrorepageComponent,
    ContantComponent,
    CardComponent,
    AboutComponent,
    ChildComponent,
    ParentsComponent,
    Parent01Component,
    Child01Component,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
