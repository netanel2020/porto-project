import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navigation, Router } from '@angular/router';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.less']
})
export class GetUsersComponent implements OnInit {



    //link to my external websyte with my data
    readonly ROOT_URL = "https://theporto.online/interwebapi/api/Users/Get";

    //var to get the data from http request
    MyData:any="";

    //initilize Users class to Users array of Users class  (😂😁😁ובעברית צחה לא עושה כמעט כלום)
    public Users:any;
  autenticated: boolean = false;
  //autenticated: boolean;

  constructor(private http:HttpClient,
    private router:Router) {}
    delay =  async (ms:number) => new Promise(res => setTimeout(res, ms));
  getUsers(){
    //my data get a strig with my data
this.http.get(this.ROOT_URL).subscribe(data=> this.MyData=JSON.parse(data.toString()) );
//Users take the string and change it to json object
this.Users=this.MyData;
//for test
console.log(this.Users);

    }

  time: boolean=true;
    wait2sec = async () => {
      await this.delay(2000);
      console.log("Waited 5s");
    this.getUsers();
this.time=false;
    };
  ngOnInit(): void {
    if(localStorage.getItem("ef7")==="True"){

      }else{
        this.router.navigate(["/login"]);

      }
      this.getUsers();
      this.wait2sec();
  }

}
