import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Emiter } from '../Emiter/EventEmiter';
@Component({
  selector: 'app-my-deatalis',
  templateUrl: './my-deatalis.component.html',
  styleUrls: ['./my-deatalis.component.less']
})
export class MyDeatalisComponent implements OnInit {
massage="hello";

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }


  ngOnInit(): void {

    this.http.post("http://theporto.online/interwebapi/api/Auth/GetName2",//,lo{headers:headers}calStorage.getItem("jwt")

    {withCredentials:true},

    ).subscribe(
     (res:any)=> {(data: any)=> res=JSON.parse(data);

this.massage=`hi `+res.name;
localStorage.setItem("deatails",res.busketid);
//set authEmiter true if the user aotenticated sucssefoly
Emiter.auotEmiter.emit(true);

// this condition check if the user is an admin and set authManagEniter true
//or else if not an admin

if(res.isadmin==="True"){
  localStorage.setItem("ef7",res.isadmin);

  this.router.navigate(["/managment"]);

}


//var hold the admin key
      },
      err=>{
        Emiter.auotEmiter.emit(false)
        this.massage='זיהוי נכשל';
        alert(this.massage);
        //set authEmiter false if the user not aotenticated sucssefoly
        Emiter.auotEmiter.emit(false);
        this.router.navigate(["/login"]);
      })

  }

}
