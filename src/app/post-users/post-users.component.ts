import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostRequestService } from '../post-request.service';
@Component({
  selector: 'app-post-users',
  templateUrl: './post-users.component.html',
  styleUrls: ['./post-users.component.less']
})
export class PostUsersComponent implements OnInit {
  readonly ROOT_URL = "https://theporto.online/interwebapi/api/Users/addUsers";
  constructor(private PostRequest :PostRequestService,
    private router:Router
    ) { }
  getUserFormData(data:any){
    data.Admin=false;
 if(localStorage.getItem("busketTempRendom")){
   //if the current user have some prodacts in hes busket before he's signd in
   //send a massege to update db with to curent userid
 }
if(data.validPass === data.USPass){
delete data.validPass;
   JSON.stringify(data);
    this.PostRequest.SavePost(data,this.ROOT_URL).subscribe((data)=>{



      console.log(data);


    this.router.navigate(["login"])
    //navugate to login page after the registration
    },
    err=>{
      alert("הרישום נכשל" )
    }
    )
    }else{
      window.alert("password not match" )
    }
  }

  ngOnInit(): void {
  }

}



