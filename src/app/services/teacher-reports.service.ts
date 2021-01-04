import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherReportsService {
  public url: any;

  constructor( public http:HttpClient ) { }

  teacherReport()
  {
    this.url='http://localhost:56932/api/Employee/Employeedetails';
    return this.http.get(this.url);
  }
}
