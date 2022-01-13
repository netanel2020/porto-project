import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostRequestService } from '../post-request.service';
import { BusketData } from '../busketdata';
@Component({
  selector: 'app-Prodacts',
  templateUrl: './Prodacts.component.html',
  styleUrls: ['./Prodacts.component.less']
})



export class ProdactsComponent implements OnInit {


  //links to my external websyte with my data
  readonly ROOT_URL = "http://theporto.online/interwebapi/api/Prodact/Get/";
  readonly ROOT_URLPostBusket = "http://theporto.online/interwebapi/api/Busket/addBusket/";


  //var to get the data from http request
  MyData:any;


 public Posts:any;
 private BusketData= new BusketData;
  s: any;
  manager: boolean=false;

  time: boolean=true;
  uploadProgress: number=0;

  constructor( private http:HttpClient,private PostRequest :PostRequestService) {}
  //my data get a strig with my data
  delay =  async (ms:number) => new Promise(res => setTimeout(res, ms));
  getProduct(){

this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=JSON.parse(data.toString()) )
this.Posts=this.MyData ;
console.log(this.MyData,"hello");
console.log(this.Posts);


//Posts take the string and change it to json object

//for test
console.log(this.Posts);
console.error;
    }
    num:any=localStorage.getItem("deatails");

    add_to_busket(items:any){ //the function get the prodact and send it to web api server

    this.BusketData.PRDID=items.PRDID; //adding the prodact id to class which save the data we need to save in the busket table
    if(localStorage.getItem("deatails")){
      this.BusketData.BusketId= this.num;
    }

  this.PostRequest.SavePost( this.BusketData,this.ROOT_URLPostBusket).subscribe((data)=>{ //sending a post request
  JSON.stringify(data);
  if(data.type==HttpEventType.UploadProgress){
    alert(data.loaded)
    console.log(data.loaded);
   }
  //and now a massege for user the process secssed
  console.log("the prodact" +items.PRDname + "is bin added to your busket sucssefoly");

    })


    }
    dalitem(item:number){

  this.http.delete("http://theporto.online/interwebapi/api/Prodact/Delete/"+item,{reportProgress:true,observe:'events'}).subscribe((res) => {this.s=res
if(res.type==HttpEventType.UploadProgress){
 alert(res.loaded)
 console.log(res.loaded);

}
});
  alert(this.s+"מוצר מספר"+item+" נמחק בהצלחה ")

    }
    wait2sec = async () => {
      await this.delay(3000);
      console.log("Waited 5s");
    this.getProduct();
this.time=false;
    };
  ngOnInit(): void {
this.getProduct();
this.wait2sec();
if(localStorage.getItem("ef7")==="True"){
  this.manager=true;
}else{
  this.manager=false;
}
  }

}
