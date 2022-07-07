import { Component, OnInit } from '@angular/core';

//import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  public constructor(//private titleService: Title,private meta:Meta
   ) { }
  ngOnInit(): void {
    alert("this design is temporary you can fiend  the new design in about page")
   // throw new Error('Method not implemented.');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    this.titleService.setTitle('פורטו חנות הבית היהודי http://www.theporto.online');
    this.meta.addTag({
      name: 'פורטו חנות הבית היהודי',
      content: 'מעדנית אוכל לשבת משובחת'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'טשולנט סלטים ' +
          ' מחלקת יינות מובילה'
      });
  }
}







//title = 'porto-project';
 //public observable: Observable < any > =new Observable((observer) => { })




