import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';

@Component({
  selector: 'app-Prodacts',
  templateUrl: './Prodacts.component.html',
  styleUrls: ['./Prodacts.component.less']
})
export class ProdactsComponent implements OnInit {
  //link to my external websyte with my data
  readonly ROOT_URL = "https://localhost:44353/api/Prodact";

  //var to get the data from http request
  MyData:any="";

  //initilize Users class to Posts array of Users class  (😂😁😁ובעברית צחה לא עושה כמעט כלום)
  public Posts:any;
 

  constructor(private http:HttpClient) {}
  getPosts(){
    //my data get a strig with my data
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=data);
//Posts take the string and change it to json object
this.Posts=JSON.parse(this.MyData);
//for test
console.log(this.Posts);

    }
  ngOnInit(): void {
  }

}
