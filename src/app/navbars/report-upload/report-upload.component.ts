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

  constructor( public fb: FormBuilder) {
    this.CityValid = false;
    this.config = {
      displayKey: "city", //if objects array passed which key to be displayed defaults to description
      search: true,
      limitTo: 10,
    };
    this.report = this.fb.group({
      'studentName':'',
    });

    this.studentLists=[
      '1','2'
    ]
    alert('hi')
  }


  ngOnInit(): void {
    console.log(this.CityValid,'ghhjhjhj');
  }

}
