import { Component, OnInit } from '@angular/core';
import { PostRequestService } from '../post-request.service';
@Component({
  selector: 'app-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.less']
})

export class PostOrderComponent implements OnInit {
  readonly ROOT_URL = "http://theporto.online/interwebapi/api/Orders/addOrders";
  constructor(private PostRequest :PostRequestService) { }
  getOrderFormData(data:any){
    this.PostRequest.SavePost(data,this.ROOT_URL).subscribe((data)=>{


      JSON.stringify(data);
      console.log(data);

    })
    console.warn(data);


  }

  ngOnInit(): void {



  }

}
