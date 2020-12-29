import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login:FormGroup;
  public hide = true;

  constructor(public fb:FormBuilder, public toastr: ToastrService, public router:Router) {

    this.login=this.fb.group({
      'emailId': ['', Validators.compose([Validators.required, Validators.pattern("^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")])],
      'password': ['', Validators.required],

    })

  }

  ngOnInit(): void {
  }

  submit(value){
    console.log(value,'value..')
    if(value.emailId=='abc@gmail.com' && value.password=='1234567'){
      this.toastr.success('Login Successful!.');
      this.router.navigate(['/home']);
    }else{
      this.toastr.error('Invalid EmailId or Password');

    }
  }

}
