import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {TeacherReportsService} from "../../services/teacher-reports.service";

@Component({
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.scss']
})
export class TeacherReportComponent implements OnInit {
  public report: any;
  public reportList: any;

  constructor(public SpinnerService: NgxSpinnerService, public teachReport: TeacherReportsService) {
    this.SpinnerService.show();
    this.reportList=[];
    this.reportList.push(
      {
      StudentRegNo:'001',
      Name: 'raja',
      Std: '3',
      Marks: '39',
      Age: '8',
      Address: 'kk Nagar',
      City: 'chennai',
      ContactNum: '9788667788',
    },
      {
        StudentRegNo:'002',
        Name: 'sharmi',
        Std: '5',
        Marks: '79',
        Age: '10',
        Address: 'vadapalani',
        City: 'chennai',
        ContactNum: '9788667784',
      }, {
        StudentRegNo:'003',
        Name: 'keerthi',
        Std: '6',
        Marks: '79',
        Age: '11',
        Address: 't Nagar',
        City: 'chennai',
        ContactNum: '9788667756',
      }, {
        StudentRegNo:'004',
        Name: 'venkat',
        Std: '4',
        Marks: '94',
        Age: '9',
        Address: 'kk Nagar',
        City: 'chennai',
        ContactNum: '9788664488',
      }, {
        StudentRegNo:'005',
        Name: 'sugha',
        Std: '3',
        Marks: '53',
        Age: '8',
        Address: ' chrompet',
        City: 'chennai',
        ContactNum: '9788667788',
      },
    );

    console.log(this.reportList,'reportList....')
    // this.report=JSON.parse( this.reportList);
    this.report=( this.reportList);
    console.log(this.report,'report...')
    this.SpinnerService.hide();

    // this.report.push({
    //   StudentRegNo:1,
    //   Name: 'ABC',
    //   Std: '3',
    //   Marks: '39',
    //   Age: '10',
    //   Address: 'kk Nagar',
    //   City: 'chennai',
    //   ContactNum: '9788667788',
    // });


  }

  ngOnInit(): void {
    // this.teacherDetails();
  }
  teacherDetails() {
    this.SpinnerService.show();
    this.SpinnerService.hide();
    this.teachReport.teacherReport().subscribe((data: any) => {
      this.report = data;
      console.log(this.report);
      this.SpinnerService.hide();
    });
  }

}
