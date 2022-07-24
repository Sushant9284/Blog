import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../blog-services/services.service';

@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.scss']
})
export class BlogCreationComponent implements OnInit {

  constructor(private fb: FormBuilder, private bs: ServicesService) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  createBlog(value) {

    this.bs.postBlogData(value).subscribe(data => {
      console.log("posted data :", data);

    })
    console.log(value);

  }

}
