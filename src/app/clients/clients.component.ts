import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import{Users} from '../Users';
import {  Observable } from 'rxjs';
import { Callbacks, data } from 'jquery';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})


/*<!--https://jsonplaceholder.typicode.com/todos https://localhost:44353/api/Users/get -->*/




export class ClientsComponent{

  //link to my external websyte with my data
  readonly ROOT_URL = "https://localhost:44353/api/Users";

  //var to get the data from http request
  MyData:any="";

  //initilize Users class to Posts array of Users class  (😂😁😁ובעברית צחה לא עושה כמעט כלום)
  public Posts:Array<Users>=[];
 

  constructor(private http:HttpClient) {}


//function to call http request 
    getPosts(){
    //my data get a strig with my data
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=data);
//Posts take the string and change it to json object
this.Posts=JSON.parse(this.MyData);
//for test
console.log(this.Posts);
    }



    ngOnInit(): void { }
   
  }



