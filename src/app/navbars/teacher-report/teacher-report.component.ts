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

  constructor(public SpinnerService: NgxSpinnerService, public teachReport: TeacherReportsService) { }

  ngOnInit(): void {
    this.teacherDetails();
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
