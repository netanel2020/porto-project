import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GetOrderComponent } from './get-order/get-order.component';
import { ProdactsComponent } from 'src/app/Prodacts/Prodacts.component';
import { PostProdactComponent } from './post-prodact/post-prodact.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { PostUsersComponent } from './post-users/post-users.component';
import { BusketComponent } from './busket/busket.component';
import { PostOrderComponent } from './post-order/post-order.component';
import { ManagementComponent } from './management/management.component';
import { LocationComponent } from './location/location.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyDeatalisComponent } from './my-deatalis/my-deatalis.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { GratitudeComponent } from './gratitude/gratitude.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { MycvComponent } from './mycv/mycv.component';
const routes: Routes = [
  {path:'thanks',component:GratitudeComponent},
  { path: 'prodacts', component: ProdactsComponent},
   { path: 'AboutUs', component: AboutUsComponent},
  { path: 'send-prodacts', component: PostProdactComponent},
  { path: 'users', component: GetUsersComponent},
  { path: 'add-users', component: PostUsersComponent},
  { path: 'busket', component: BusketComponent},
  { path: 'send-order', component: PostOrderComponent},
  { path: 'get-orders', component: GetOrderComponent},
  { path: 'managment', component: ManagementComponent},
  { path: 'location', component:LocationComponent },
  {path:'login',component:LoginComponent},
  {path:'mydetails',component:MyDeatalisComponent},
  {path:'shipment',component:ShipmentComponent},
  {path:'search/:term',component:SearchComponent},
  {path:'search',component:SearchComponent},
{path:'gratetude',component:GratitudeComponent},

{path:'cv',component:MycvComponent},
{path:'*',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
