
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { busketbnterface, BusketData,busketinterface } from '../busketdata';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.less']
})

export class BusketComponent implements OnInit {



public s:any;
public SumPrice:number=0;
    //var to get the data from http request
    MyData:any;

    //GET THE CURENT USER BUSKET
    mybusID:any=localStorage.getItem("deatails");
    public MyBusketID:number=this.mybusID;

       JSONBusPRDC:any;
     BusketProdact:busketinterface[]=[];

readonly ROOT_URL = "http://theporto.online/interwebapi/api/Busket/Get/"+this.MyBusketID;
    //link to my external websyte with my data


   // a:number=0;
   public busketbnterface=new busketbnterface;

   private BusketData=new BusketData;



  constructor(private http:HttpClient ,
    private router:Router) {}
    delay =  async (ms:number) => new Promise(res => setTimeout(res, ms));



  getBusket(){
    //is a temp var to demonstrate my BusketID actualy i shuld get it from the token later

    //my data get a strig with my data
this.http.get(this.ROOT_URL,{withCredentials:true}).subscribe(data=> this.MyData=JSON.parse(data.toString()));
//Users take the string and change it to json object
this.JSONBusPRDC=this.MyData;

for(var a in this.MyData){
this.SumPrice+= this.MyData[a].PRDPrice;

}

    }

    time: boolean=true;
    wait2sec = async () => {
      await this.delay(2000);
      console.log("Waited 5s");
    this.getBusket();

    this.time=false;
    };
    DeleteFromBusket(ITEM:Number){
      this.http.delete("http://theporto.online/interwebapi/api/Busket/Delete/"+ITEM).subscribe((res) => this.s=res);
alert(this.s+"מוצר מספר"+ITEM+" נמחק בהצלחה ")

window.location.reload()
this.getBusket();
    }


  ngOnInit(): void {
    this.getBusket();
    this.wait2sec();
  }

}






  /*
    //var to get the data from http request

  getPosts(){

    }

  */


