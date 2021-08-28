import { Component, OnInit } from '@angular/core';

//interfase of prodacts
export interface prodacts{
id:number;
name:string;
image:string;
price:number;
};
@Component({
  selector: 'app-center-page',
  templateUrl: './center-page.component.html',
  styleUrls: ['./center-page.component.less']
})
export class CenterPageComponent implements OnInit {
  constructor() { } 
    //instance wite json string of prodacts
  //private prodaects:Prodacts[]=[{id:1,name:"wine",image:"",price:100},{id:1,name:"wine",image:"",price:100}];
 
 ngOnInit(): void {
  }

}
