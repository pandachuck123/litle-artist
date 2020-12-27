import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {PagesComponent} from "./pages/pages.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path: '',
    component: PagesComponent, children: [
      { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
    ]
  }
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
