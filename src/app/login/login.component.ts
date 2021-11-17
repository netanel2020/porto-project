import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  readonly ROOT_URL = "https://localhost:44353/api/Auth/PostToken/";
  //https://localhost:44353/api/Auth/PostToken/
  MyData: any;
  constructor(private httpclient:HttpClient) { }
  LoginUser(data:any){
    console.log(data);
    JSON.stringify(data);
   this.httpclient.post(this.ROOT_URL,data).subscribe(data=> this.MyData=data )
      console.log(this.MyData);
  }
  ngOnInit(): void {
  }

}
