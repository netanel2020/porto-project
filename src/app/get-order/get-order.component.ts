import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.less'],
})
export class GetOrderComponent implements OnInit {
  //link to my external websyte with my data
  readonly ROOT_URL = 'http://localhost/interwebapi/api/Orders/Get';

  //var to get the data from http request
  MyData: any = '';

  //initilize Users class to Orders array of Users class  (😂😁😁ובעברית צחה לא עושה כמעט כלום)
  public Orders: any;

  constructor(private http: HttpClient, private router: Router) {}
  getOrders() {
    //my data get a strig with my data
    this.http
      .get(this.ROOT_URL)
      .subscribe((data) => (this.MyData = JSON.parse(data.toString())));
    //Orders take the string and change it to json object
    this.Orders = this.MyData;
    //for test
    console.log(this.Orders);
  }

  ngOnInit(): void {
    if (localStorage.getItem('ef7') === 'True') {
      alert('he is an manager');
    } else {
      this.router.navigate(['/login']);
    }
  }
}
