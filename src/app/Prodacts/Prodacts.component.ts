import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { PostRequestService } from '../post-request.service';
import { BusketData } from '../busketdata';

@Component({
  selector: 'app-Prodacts',
  templateUrl: './Prodacts.component.html',
  styleUrls: ['./Prodacts.component.less']
})

@Injectable({
  providedIn: 'root'
})
export class ProdactsComponent implements OnInit {


  //links to my external websyte with my data
  readonly ROOT_URL = "https://theporto.online/interwebapi/api/Prodact/Get";
  readonly ROOT_URLPostBusket = "https://theporto.online/interwebapi/api/Busket/addBusket/";


  //var to get the data from http request
  MyData: any;

  chekIfDataExist: boolean = false;
  public Posts: any;
  private BusketData = new BusketData;
  s: any;
  manager: boolean = true;

  time: boolean = true;
  uploadProgress: number = 0;

  constructor(private http: HttpClient, private PostRequest: PostRequestService) { }
  //my data get a strig with my data
  delay = async (ms: number) => new Promise(res => setTimeout(res, ms));

  //function tp get items from api server
  getProduct() {

    this.http.get(this.ROOT_URL).subscribe(data => { if (data != "no data found") { console.log(data); return this.Posts = JSON.parse(data.toString()) } });


    this.chekIfDataExistFunc();
  }
  num: any = localStorage.getItem("deatails");


  //the function get the prodact and send it to web api server
  add_to_busket(items: any) {

    this.BusketData.PRDID = items.PRDID; //adding the prodact id to class which save the data we need to save in the busket table
    if (localStorage.getItem("deatails")) {
      this.BusketData.BusketId = this.num;
    } else {//if the user curently not register or sign in
      let bskTime:number=Date.now();
      alert("לשמירת הפריטים בסל מומלץ להירשם לאתר זה ממש בחינם ותמיד יש הטבות שוות")
      localStorage.setItem("busketTempRendom", bskTime+"0");//to do == i need to set a func to check if there is no someone else with this current temporery rendom id
      this.BusketData.BusketId = this.num=Number(localStorage.getItem("busketTempRendom"));
    }
    //to do ==check is ip and save it as a busket id wehn he register take is prodact and send them with the right id from db
    this.PostRequest.SavePost(this.BusketData, this.ROOT_URLPostBusket).subscribe(); //sending a post request
    // JSON.stringify(data);
    //   if (data.type == HttpEventType.UploadProgress) {

    //    console.log(data.loaded);
    //  }
    //massege for user the process secssed
    alert("the prodact" + items.PRDname + "is bin added to your busket sucssefoly");
  }



  //function to check if items is showing corectly
  chekIfDataExistFunc() {
    var element = document.getElementById('card');
    if (typeof (element) != 'undefined' && element != null) {
      this.chekIfDataExist = false;
      // Exists.
      this.time = false;
    } else {
      // alert("המידע שלך לא הגיע טוען מחדש")
      this.wait1sec();
    }
  }



  //function to delete items
  dalitem(item: number) {

    this.http.delete("https://theporto.online/interwebapi/api/Prodact/Delete/" + item).subscribe((res) => {
      this.s = res

    });
    alert(this.s + "מוצר מספר" + item + " נמחק בהצלחה ")

  }

  //function to wait till the html element will be proper to show the data from server
  wait1sec = async () => {
    await this.delay(1000);
    console.log("Waited 5s");
    this.getProduct();



  };
  ngOnInit(): void {
    this.getProduct();
    // this.wait1sec();
    if (localStorage.getItem("ef7") === "True") {
      this.manager = true;
    } else {
      this.manager = false;
    }
  }

}
