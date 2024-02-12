import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { observable } from 'rxjs';
import { ɵparseCookieValue } from '@angular/common';
observable
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  readonly ROOT_URL = "https://theprotest.online/interwebapi/api/Auth/PostToken/";
  //https://localhost:44353/api/Auth/PostToken/
  MyData: any;
  constructor(
    private httpclient:HttpClient,
    private router:Router
    ) { }
  LoginUser(data:any){
    console.log(data);
    JSON.stringify(data);
   this.httpclient.post(this.ROOT_URL,data,{
    withCredentials:true,
   }).subscribe(response=>{
const token =response
localStorage.setItem("jwt", token.toString())
this.router.navigate(["/mydetails"]);

   },err=>{


    })





  }
  ngOnInit(): void {
  }


}
