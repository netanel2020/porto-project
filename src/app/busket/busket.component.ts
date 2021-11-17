
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { busketbnterface, BusketData,busketinterface } from '../busketdata';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { data } from 'jquery';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.less']
})

export class BusketComponent implements OnInit {
 
  
 

    //var to get the data from http request
    MyData:any;
    public MyBusketID:number=0;
     JSONBusPRDC:any;
     BusketProdact:busketinterface[]=[];

readonly ROOT_URL = "https://localhost:44353/api/Busket/"+this.MyBusketID;
    //link to my external websyte with my data
   
     
   // a:number=0;
   private busketbnterface=new busketbnterface;
    
   private BusketData=new BusketData;
 
  

  constructor(private http:HttpClient ) {}
  getBusket(){
    //is a temp var to demonstrate my BusketID actualy i shuld get it from the token later

    //my data get a strig with my data
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=data);
//Users take the string and change it to json object


this.BusketData=JSON.parse(this.MyData);
//for test



for (const obj in this.BusketData) {
  this.GetProdact(this.BusketData[obj].PRDID,obj);
  
 
 
  
}
  
    }

    GetProdact(a: number,obj:any){
//links to my external websyte with my data
   var ROOT_URL1 = "https://localhost:44353/api/Prodact/"+a;
     

   this.http.get<busketinterface[]>(ROOT_URL1).subscribe(data=> this.JSONBusPRDC=data )
   
  //console.log(this.JSONBusPRDC+"json string from server");
  
 if(JSON.parse(this.JSONBusPRDC))
  this.BusketProdact=JSON.parse(this.JSONBusPRDC);
//BusketProdact take the json string and change it to  object

    }
    

  ngOnInit(): void {
  }

}

  




  /* 
    //var to get the data from http request
 
  getPosts(){

    }

  */


