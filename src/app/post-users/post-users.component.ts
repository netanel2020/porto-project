import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostRequestService } from '../post-request.service';
@Component({
  selector: 'app-post-users',
  templateUrl: './post-users.component.html',
  styleUrls: ['./post-users.component.less']
})
export class PostUsersComponent implements OnInit {
  readonly ROOT_URL = "http://theporto.online/interwebapi/api/Users/addUsers";
  constructor(private PostRequest :PostRequestService,
    private router:Router
    ) { }
  getUserFormData(data:any){
if(data.USPass===data.USPassValid){

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
      window.alert("password not match")
    }
  }

  ngOnInit(): void {
  }

}



