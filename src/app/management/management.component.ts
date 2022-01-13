import { Component, OnInit } from '@angular/core';
import { Emiter } from '../Emiter/EventEmiter';
import { Router } from '@angular/router';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {
 
 
  constructor(private router:Router ) { }
 ManagAutenticated:any;
  ngOnInit(): void {
    if(localStorage.getItem("ef7")==="True"){
     
      this.ManagAutenticated=true}else{
        this.ManagAutenticated=false; 
        this.router.navigate(["/login"]);
      }

 

  }

}
