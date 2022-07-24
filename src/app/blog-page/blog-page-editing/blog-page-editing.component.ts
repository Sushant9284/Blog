import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../blog-services/services.service';

export class blogUser {
  id: number;
  header: string
  content: string
  description: string
}

@Component({
  selector: 'app-blog-page-editing',
  templateUrl: './blog-page-editing.component.html',
  styleUrls: ['./blog-page-editing.component.scss']
})
export class BlogPageEditingComponent implements OnInit {

  showWhenClick = false;
  show = true;
  data: blogUser[] = [];
  // data:any=[];

  form: FormGroup;
  blogUser: blogUser = {
    id: 0,
    header: '',
    content: '',
    description: ''
  }

  constructor(private bs: ServicesService, private route: ActivatedRoute, private fb: FormBuilder) { }

  public newPrice: any;
  ngOnInit() {

    this.form = this.fb.group({
      id: [''],
      header: [''],
      content: [''],
      description: ['']
    })



    this.route.queryParams.subscribe(a => {
      console.log("roter", [a]);

      this.getData(a.id);

    })
  }
  getData(id) {

    this.blogUser.id = id;
    console.log(this.blogUser.id);

    this.bs.getBlogDataById(id).toPromise<any>().then(data => {
      this.data = data
    })

    // this.bs.getBlogDataById(id).subscribe(data => {
    //   this.data = data;
    //   console.log("get data by id", data);

    // })
  }

  blogEdit() {
    this.show = false;
    this.showWhenClick = true;
    // let blogData:any={};
    this.blogUser = this.data[0];

    console.log(this.data);


    this.form.controls["id"].setValue(this.blogUser.id);
    this.form.controls["header"].setValue(this.blogUser.header);
    this.form.controls["content"].setValue(this.blogUser.content);
    this.form.controls["description"].setValue(this.blogUser.description);


    // form.subtitle=blogEditedData.value.subtitle;
    // form.description=blogEditedData.value.description;

  }

  updateBlog(value) {


    console.log("Value : ", value.id);
    console.log("Value : ", value);
window.location.reload();

    this.bs.editBlogData(value).subscribe(datas => {

      console.log(datas);
    })


    this.show = true;
    this.showWhenClick = false;

    

  }


}
