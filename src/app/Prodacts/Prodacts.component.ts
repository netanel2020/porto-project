import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostRequestService } from '../post-request.service';
import { BusketData } from '../busketdata';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-Prodacts',
  templateUrl: './Prodacts.component.html',
  styleUrls: ['./Prodacts.component.less']
})



export class ProdactsComponent implements OnInit {


  //links to my external websyte with my data
  readonly ROOT_URL = "https://localhost:44353/api/Prodact";
  readonly ROOT_URLPostBusket = "https://localhost:44353/api/Busket";


  //var to get the data from http request
  MyData:any;

  
 public Posts:any;
 private BusketData= new BusketData;
 
  constructor( private http:HttpClient,private PostRequest :PostRequestService) {}
  //my data get a strig with my data
  getPosts(){
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=data )
this.Posts=JSON.parse(this.MyData );
console.log(this.MyData,"hello");
console.log(this.Posts);


//Posts take the string and change it to json object

//for test
console.log(this.Posts);
console.error;
    }
    
    
    add_to_busket(items:any){ //the function get the prodact and send it to web api server 
      
    this.BusketData.PRDID=items.PRDID; //adding the prodact id to class which save the data we need to save in the busket table

  this.PostRequest.SavePost( this.BusketData,this.ROOT_URLPostBusket).subscribe((data)=>{ //sending a post request 
  JSON.stringify(data);

  //and now a massege for user the process secssed
  console.log("the prodact" +items.PRDname + "is bin added to your busket sucssefoly");

    })


    }
  ngOnInit(): void {

  }

}
