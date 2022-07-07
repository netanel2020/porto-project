import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.less']
})
export class MycvComponent implements OnInit {

  constructor() { }
public dwnldFile=()=>{
window.open("../../../../../../Pictures/netanelArieCV.pdf");
}

  ngOnInit(): void {
    alert("curently the file its wrong please send me a message where to send my cv via mail ")
  }

}
