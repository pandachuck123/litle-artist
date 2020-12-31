import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public closeNav: any;

  constructor() { }

  ngOnInit(): void {

  }

  openNav() {
    document.querySelector('#content').addEventListener('click', this.closeNav)

    // document.getElementById("sidebar").style.width = "230px";
    // document.getElementById("content").style.marginLeft = "250px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  close() {
    // document.querySelector('#content').addEventListener('click', this.closeNav)
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
  }
  // expandCollpse(sectionName) {
  //   alert(sectionName)
  //   let CurrentCls = document.getElementById(sectionName).getAttribute("class");
  //   if (CurrentCls == "collapse" || CurrentCls == "collapse hide")
  //   {
  //     alert('in')
  //     document.getElementById(sectionName).setAttribute("class", "collapse show");
  //     document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "true");
  //   }
  //   else {
  //     alert('11')
  //     document.getElementById(sectionName).setAttribute("class", "collapse hide");
  //     document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "false");
  //   }
  // }
}
