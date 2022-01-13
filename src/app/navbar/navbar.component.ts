import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emiter } from '../Emiter/EventEmiter';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  JSONptdOBJ: any;
  manager: boolean=false;

  constructor( private router:Router,
    private http:HttpClient) { }
autenticated=false;

toggle = 0;
  ngOnInit(): void {

    Emiter.auotEmiter.subscribe(
      (auth:boolean)=>{
this.autenticated=auth;
    });
    if(localStorage.getItem("ef7")==="True"){
      this.manager=true;
    }else{
      this.manager=false;
    }
  }
logout(){
localStorage.setItem("jwt","");
this.autenticated=false;
this.router.navigate(["/login"]);
}
 query="http://theporto.online/interwebapi/api/Prodact/GetSearch/?s=";
Search(){
this.http.get(this.query).subscribe(data=> this.JSONptdOBJ=JSON.parse(data.toString()))

}
 itsPushed:boolean=false
Show(){
   this.itsPushed=true;
}
UnShow(){
//var a=time
  this.itsPushed=false;
}
openul(){
this.toggle++;
this.toggle%=2;

}
}
