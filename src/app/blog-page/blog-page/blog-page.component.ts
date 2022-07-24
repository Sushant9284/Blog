import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterEvent, RouterLinkActive } from '@angular/router';
// import { RouterLink, Routes } from '@angular/router';
import { ServicesService } from '../blog-services/services.service';

export class data{
  title:string
  subtitle:string
  description:string
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  
  @Output() public newPrice = new EventEmitter<any>();
  public price:any;
  // @Input() data='';
  blogData:any=[];

  datapass: any = [];

  form: FormGroup;

  data: data[] = [];

  getDataId:any='ABC';

  constructor(private fb: FormBuilder,private bs:ServicesService) { }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required]
    })


  
  }

  save(form) {
    this.data = form
    console.log("---Save---", this.data);
    localStorage.setItem('data',form);
  }

  click() {

  }

  getData(id){

    this.bs.getBlogDataById(id).subscribe(data=>{
      this.getDataId=data;
      this.newPrice=this.getDataId
      console.log("get data by id",data);    
    })
   
  }

}
