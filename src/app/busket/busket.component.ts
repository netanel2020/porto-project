
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { busketbnterface, BusketData, busketinterface } from '../busketdata';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.less']
})

export class BusketComponent implements OnInit {


  public iteratorBusDblChek: number = 0;
  public s: any;
  public SumPrice: number = 0;
  //var to get the data from http request
  MyData: any;

  //GET THE CURENT USER BUSKET
  mybusID: any = localStorage.getItem("deatails");
  public MyBusketID: number = this.mybusID;

  JSONBusPRDC: any;
  BusketProdact: busketinterface[] = [];

  readonly ROOT_URL = "https://theprotest.online/interwebapi/api/Busket/Get/" + this.MyBusketID;
  //link to my external websyte with my data


  // a:number=0;
  public busketbnterface = new busketbnterface;

  private BusketData = new BusketData;
  SecItrtBsDblChk: number = 1;



  constructor(private http: HttpClient,
    private router: Router) { }
  delay = async (ms: number) => new Promise(res => setTimeout(res, ms));



  getBusket() {
    //is a temp var to demonstrate my BusketID actualy i shuld get it from the token later

    //my data get a strig with my data
    this.http.get(this.ROOT_URL, { withCredentials: true }).subscribe(data => this.MyData = JSON.parse(data.toString()));
    //Users take the string and change it to json object
    this.JSONBusPRDC= this.BusDblChek(this.MyData);

console.log(this.JSONBusPRDC)
    for (var a in this.JSONBusPRDC) {
      let c = Number(a);
      this.SumPrice += this.JSONBusPRDC[c].PRDPrice * this.JSONBusPRDC[c].Quentity;

    }
  }

//func to delete multiple prodacts from busket
  BusDblChek(mydata: any) {

    for (var b in mydata) {//loop to know the lenth of mydata
      this.iteratorBusDblChek = Number(b);
      console.log(mydata[b].PRDID);
    }
    for (var sum = 0; sum < this.iteratorBusDblChek; sum++) {//sum uses to calculate the first alament to compare another alament
      this.SecItrtBsDblChk = sum;      while (this.SecItrtBsDblChk < this.iteratorBusDblChek && mydata[sum] != undefined) {     if (mydata[this.SecItrtBsDblChk + 1] != undefined && mydata[sum].PRDID === mydata[this.SecItrtBsDblChk + 1].PRDID) {
          console.log(mydata[sum].PRDID + "its a same ", mydata[this.SecItrtBsDblChk + 1].PRDID);
          delete mydata[this.SecItrtBsDblChk + 1];
          mydata[sum].Quentity++;
          this.SecItrtBsDblChk++;
        }
        this.SecItrtBsDblChk++;
      }
    }

   return  this.deleteSpace(mydata);
  }

  deleteSpace(mydata: any) {
    var all=[];
for(var element in mydata){
  if (mydata[element ] != undefined) {
all.push(mydata[element]);
  }
 }

console.log(all+ " all");
return all;
  }
  time: boolean = true;
  wait2sec = async () => {
    await this.delay(2000);
    console.log("Waited 5s");
    this.getBusket();
    this.time = false;
  };

  DeleteFromBusket(ITEM: Number,ItemName:string) {
    this.http.delete("https://theprotest.online/interwebapi/api/Busket/Delete/" + ITEM).subscribe((res) => this.s = res);
    alert(ItemName +  " נמחק בהצלחה ")

    window.location.reload()
    this.getBusket();
  }


  ngOnInit(): void {
    if(localStorage.getItem("busketTempRendom"  )&&localStorage.getItem("deatails")){
      alert("  נראה שהתחברת בעבר מדפדפן זה לצפייה בפריטים  לחץ אישור ")//need to set custumize alert later
      //this.http.put("https://theporto.online/interwebapi/api/Busket/",{}){

    //  }
    }
    this.getBusket();
    this.wait2sec();
  }

}








