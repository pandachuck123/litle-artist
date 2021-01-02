import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public closeNav: any;

  constructor(public toastr: ToastrService) { }

  ngOnInit(): void {

  }

  out(){
    this.toastr.success('Log Out Successfully')
  }


}
