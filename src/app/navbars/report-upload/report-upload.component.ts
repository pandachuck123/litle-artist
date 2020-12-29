import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-report-upload',
  templateUrl: './report-upload.component.html',
  styleUrls: ['./report-upload.component.scss']
})
export class ReportUploadComponent implements OnInit {
  public report:FormGroup;
  public config:any;
  public CityValid:any;
  public studentLists:any;
  public fileDetails:any;
  public url: any;
  public uploadData: any;
  public image: any;
  public uploadPath: any;

  constructor( public fb: FormBuilder) {
    // this.CityValid = false;
    // this.image = [];
    // this.uploadPath = [];
    //
    // this.report = this.fb.group({
    //   'studentName':'',
    // });
    //
    // this.studentLists=[
    //   '1','2'
    // ]
    //
    // this.config = {
    //   displayKey: "city", //if objects array passed which key to be displayed defaults to description
    //   search: true,
    //   limitTo: 10,
    // };

  }


  ngOnInit(): void {
  }

  // uploadProof(event: any) {
  //   console.log(event, 'event');
  //   let getUrlEdu = [];
  //   this.fileDetails = [];
  //
  //
  //     for (let i = 0; i < event.target.files.length; i++) {
  //       this.fileDetails.push({
  //         'base64': '',
  //         'fileExt': event.target.files[i].type,
  //         'name': event.target.files[i].name
  //       });
  //     }
  //     for (let i = 0; i < event.target.files.length; i++) {
  //       const reader = new FileReader();
  //       reader.onload = (event: any) => {
  //         this.url = event.target.result;
  //         getUrlEdu.push(this.url.split(','));
  //         this.onUploadFinished(this.fileDetails, getUrlEdu, 'add_LA');
  //       };
  //       reader.readAsDataURL(event.target.files[0]);
  //     }
  //     this.uploadData = this.fileDetails[0].name;
  //
  //   }
  //
  // onUploadFinished(values, basecode, type) {
  //   values[0].base64 = basecode[0][1];
  //
  //   for (let k = 0; k < values.length; k++) {
  //     if (this.image.indexOf(values[k].name) == -1) {
  //       this.image.push(values[k]);
  //     }
  //   }
  //   console.log(this.image , 'this.image');
  //   if (type == 'add_LA') {
  //     this.uploadPath = [];
  //     for (let k = 0; k < values.length; k++) {
  //       if (this.uploadPath.indexOf(values[k].name) == -1) {
  //         this.uploadPath.push(values[k]);
  //       }
  //     }
  //   }
  //   console.log(this.uploadPath, 'this.addressProofPath');
  //
  //
  // }
  //
  // removeImage(){
  //   this.uploadData='';
  //   this.uploadPath=[];
  // }


}
