import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
//import post request service
import{PostRequestService}from 'src/app/post-request.service'
@Component({
  selector: 'app-post-prodact',
  templateUrl: './post-prodact.component.html',
  styleUrls: ['./post-prodact.component.less']
})
export class PostProdactComponent implements OnInit {
//initial postrequest service
  constructor(private PostRequest :PostRequestService) { }
  readonly ROOT_URL = "https://localhost:44353/api/Prodact";
  ngOnInit(): void {
  }
  
  getProdactsFormData(data:any){
this.PostRequest.SavePost(data,this.ROOT_URL).subscribe((data)=>{


  JSON.stringify(data);
  console.log(data);

})
console.warn(data);
  }
}
