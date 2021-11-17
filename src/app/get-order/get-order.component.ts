import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.less']
})
export class GetOrderComponent implements OnInit {


    //link to my external websyte with my data
    readonly ROOT_URL = "https://localhost:44353/api/Orders";

    //var to get the data from http request
    MyData:any="";
  
    //initilize Users class to Orders array of Users class  (😂😁😁ובעברית צחה לא עושה כמעט כלום)
    public Orders:any;
   
  constructor(private http:HttpClient) {}
  getOrders(){
    //my data get a strig with my data
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=data);
//Orders take the string and change it to json object
this.Orders=JSON.parse(this.MyData);
//for test
console.log(this.Orders);

    }

  ngOnInit(): void {
  }

}






 


