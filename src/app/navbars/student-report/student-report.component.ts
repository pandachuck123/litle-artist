import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.scss']
})
export class StudentReportComponent implements OnInit {
public form:FormGroup;
public CityValid:any
public image:any
// public uploadPath:any
public studentLists:any
public config:any
public imageSrc:any

  constructor( public fb: FormBuilder) {
    this.CityValid = false;
    this.image = [];

    this.form = this.fb.group({
      'studentName':['', Validators.required],
      'file':['', Validators.required],
      'fileSource':[''],
    });

    this.studentLists=[
      '1','2'
    ]

    this.config = {
      displayKey: "city", //if objects array passed which key to be displayed defaults to description
      search: true,
      limitTo: 10,
    };
    this.imageSrc='';
  }

  ngOnInit(): void {
  }
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.form.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
  onNoClick(){
   this.imageSrc='';
    this.form.controls['file'].patchValue('')
    this.form.controls['fileSource'].patchValue('')
  }

  submit(value){
    console.log(value,'value...')
    // if(this.form.value.valid){
    this.image.push(this.form.value);
    console.log(this.image,'this.image')
    // }

  }



}
