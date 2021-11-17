import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.less']
})
export class GetUsersComponent implements OnInit {

  

    //link to my external websyte with my data
    readonly ROOT_URL = "https://localhost:44353/api/Users";

    //var to get the data from http request
    MyData:any="";
  
    //initilize Users class to Users array of Users class  (😂😁😁ובעברית צחה לא עושה כמעט כלום)
    public Users:any;
   
  constructor(private http:HttpClient) {}
  getUsers(){
    //my data get a strig with my data
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=data);
//Users take the string and change it to json object
this.Users=JSON.parse(this.MyData);
//for test
console.log(this.Users);

    }

  ngOnInit(): void {
  }

}
