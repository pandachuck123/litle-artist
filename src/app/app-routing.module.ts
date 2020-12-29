import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {PagesComponent} from "./pages/pages.component";
import {ReportUploadComponent} from "./navbars/report-upload/report-upload.component";
import {HomeComponent} from "./navbars/home/home.component";
import {StudentReportComponent} from "./navbars/student-report/student-report.component";
import {TeacherReportComponent} from "./navbars/teacher-report/teacher-report.component";
import {ProjectSetupComponent} from "./navbars/project-setup/project-setup.component";
import {ProjectReportComponent} from "./navbars/project-report/project-report.component";
import {ReportComponent} from "./navbars/report/report.component";



const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: '', component: PagesComponent, children: [
      // { path: 'home', loadChildren: () => import('./navbars/navbars.module').then(m => m.NavbarsModule) },
      { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
      { path: 'report-upload', component: ReportUploadComponent, data: { breadcrumb: 'report' } },
      { path: 'student-report', component: StudentReportComponent, data: { breadcrumb: 'student' } },
      { path: 'teacher-report', component: TeacherReportComponent, data: { breadcrumb: 'teacher' } },
      { path: 'project-report', component: ProjectReportComponent, data: { breadcrumb: 'project' } },
      { path: 'report', component: ReportComponent, data: { breadcrumb: 'report' } },
      { path: 'project-setup', component: ProjectSetupComponent, data: { breadcrumb: 'project' } },
    ]
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
