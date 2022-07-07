import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
/* import { post } from 'jquery';
import { emit } from 'process'; */

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.less']
})
export class GratitudeComponent implements OnInit {
  LINK="https://theporto.online/interwebapi/api/Upload/post";
  massage: string = "";
  progress: number = 0;
  @Output() public onUploadFinish = new EventEmitter();
  constructor(private http: HttpClient) { }


  public savePdf=(files:any)=> {
    if (files.length === 0)
      return;

      let FilesToUpload = <File>files[0];
      const formData = new FormData();
console.log(FilesToUpload)
      formData.append('File', FilesToUpload,FilesToUpload.name);
      this.http.post(this.LINK, formData, { reportProgress: true, observe: 'events' }).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            if (event.total)
              this.progress = Math.round(100 * event.loaded / event.total)

          } else if (event.type === HttpEventType.Response) {
            this.massage = "upload success.";
            this.onUploadFinish.emit(event.body)
          }

        })

  }





  getCstmrRviwsFormData(form: any) {

  }
  currentRate = 3.14;

  ngOnInit(): void {
  }

}
