import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable'; 
import { CenterPageComponent } from './center-page/center-page.component';
import { PostRequestService } from './post-request.service';
import { ProdactsComponent } from 'src/app/Prodacts/Prodacts.component';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ItemsComponent,
    ClientsComponent,
    CenterPageComponent,
    ProdactsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
   //Observabl
   
  
  ],
  providers: [
    
   PostRequestService, 
   Injectable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
