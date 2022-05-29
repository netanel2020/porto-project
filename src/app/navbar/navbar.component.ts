import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { Emiter } from '../Emiter/EventEmiter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent implements OnInit {
  JSONptdOBJ: any;
  manager: boolean=false;
   Searchitems=[{id:1,ItemNumber:2},{id:1,ItemNumber:2},{id:1,ItemNumber:2},{id:1,ItemNumber:2},{id:1,ItemNumber:2}];

  constructor( private router:Router,
    private http:HttpClient,
    private ActivRout:ActivatedRoute) { }
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
