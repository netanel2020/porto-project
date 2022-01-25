import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostRequestService } from './post-request.service';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ROUTES, Routes } from '@angular/router';

import { Meta, Title } from '@angular/platform-browser';
//import { BusketData }from "../app/busketdata"
//for right order component👇 and module👆

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProdactsComponent } from 'src/app/Prodacts/Prodacts.component';
import { PostProdactComponent } from './post-prodact/post-prodact.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { PostUsersComponent } from './post-users/post-users.component';
import { BusketComponent } from './busket/busket.component';
import { PostOrderComponent } from './post-order/post-order.component';
import { GetOrderComponent } from './get-order/get-order.component';
import { ManagementComponent } from './management/management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MyDeatalisComponent } from './my-deatalis/my-deatalis.component';
import { CommonModule } from '@angular/common';
import { custominterceptor } from './custominterceptor';
import { ShipmentComponent } from './shipment/shipment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProdactsComponent,
    PostProdactComponent,
    GetUsersComponent,
    PostUsersComponent,
    BusketComponent,
    PostOrderComponent,
    GetOrderComponent,
    ManagementComponent,
    AboutUsComponent,
    LocationComponent,
    LoginComponent,
    MyDeatalisComponent,
    ShipmentComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule,
     Meta,
     Title,

    AppRoutingModule,
  // BusketData
   //Observable,
    CommonModule


  ],
  providers: [{
provide:HTTP_INTERCEPTORS,
useClass:custominterceptor,
multi:true
  },

   PostRequestService,
   Injectable,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
