import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
//import post request service
import{PostRequestService}from 'src/app/post-request.service'
@Component({
  selector: 'app-post-prodact',
  templateUrl: './post-prodact.component.html',
  styleUrls: ['./post-prodact.component.less']
})
export class PostProdactComponent implements OnInit {
//initial postrequest service
  constructor(private PostRequest :PostRequestService,
   private router:Router) { }
  readonly ROOT_URL = "https://theporto.online/interwebapi/api/Prodact/addProdact/";
  ngOnInit(): void {
    if(localStorage.getItem("ef7")==="True"){
//if user is an manager stay in this component
      }else{//not manager navigate to login page
        this.router.navigate(["/login"]);

      }
  }

  getProdactsFormData(data:any){
this.PostRequest.SavePost(data,this.ROOT_URL).subscribe((data)=>{


  JSON.stringify(data);
  console.log(data);

})
console.warn(data);
  }
}
