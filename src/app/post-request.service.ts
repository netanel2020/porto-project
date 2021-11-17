import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {HttpClientModule } from '@angular/common/http';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PostRequestService {
  //link to my external websyte with my data
 

  constructor(private http:HttpClient) { }

  //this metod get a object to convert it to an json array then send it to post api server
  SavePost(data:any,ROOT_URL:any){
  
return this.http.post(ROOT_URL,data);

  
}

}
