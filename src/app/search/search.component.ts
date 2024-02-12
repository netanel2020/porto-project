import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdactsComponent } from '../Prodacts/Prodacts.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  JSONptdOBJ: any="";
  searchRes: any;
  query = "https://theprotest.online/interwebapi/api/Prodact/GetSearch/?s=";
  constructor(
    private prodacts: ProdactsComponent,
    private router: Router,
    private http: HttpClient
  ) {
  }

  Search(event: any) {
    this.searchRes = event.target.value;// to show the current search request
    //to get list of maches from server

      this.http.get(this.query + event.target.value).subscribe(data => {if(data!="no data found"){console.log(data);return this.JSONptdOBJ = JSON.parse(data.toString()) }else{this.JSONptdOBJ=null} });
      if (this.JSONptdOBJ == null) {
console.log(this.JSONptdOBJ)
    }
  }
  add_to_busket(item: any) {
    this.prodacts.add_to_busket(item)
  }


  ngOnInit(): void {  }

}

