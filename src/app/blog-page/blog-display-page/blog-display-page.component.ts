import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterpipePipe } from 'src/app/blog-pipe/filterpipe.pipe';
import { ServicesService } from '../blog-services/services.service';



@Component({
  selector: 'app-blog-display-page',
  templateUrl: './blog-display-page.component.html',
  styleUrls: ['./blog-display-page.component.scss']
})
export class BlogDisplayPageComponent implements OnInit {

  // blogName;
  public filterpipe: FilterpipePipe;

  // @Input() getDataId: any='';
  // @Input() blogName: any = '';
 blogName: any = '';

  data: any;
  datas: any;

  public newPrice: any;

  blogData: any = [];

  // blogName: string = '';

  data1: any = [
    {
      content: "LKJ",

      description: "Confidential commercial information means records provided to the govern- ment by a submitter that arguably contain material exempt from release under Exemption 4 of the Freedom of Information Act, 5 U.S.C. 552(b)(4), be- cause disclosure could reasonably be expected to cause substantial competi- tive harm.",

      header: "PPZ Confidential commercial information",

      id: 1
    },
    {
      content: "xyz",

      description: "All compensation for Products solicited by Special Agent while this Agreement is in effect shall be paid to a General Agent or Master General Agency pursuant to the terms and conditions of the applicable Compensation/Product Schedule. Company has no obligation to pay compensation to Special Agent for any services performed pursuant to this Agreement.",

      header: " COMPENSATION",

      id: 2
    }

  ]

  constructor(private bs: ServicesService, private rt: Router) { }

  ngOnInit() {
    // this.datas = localStorage.getItem('data');

    this.bs.getBlogData().subscribe(a => {
      this.blogData = a;
      console.log("BlogData:", this.blogData);

    })

    this.bs.dataUpdated.subscribe((data) => {
      this.blogName = data
      console.log(this.blogName);
      
    })

    // this.blogName = this.bs.getSearchField();

    // console.log("Get Blog Name :", this.blogName);


  }

  // onSearch(searchData: string) {
  //   this.blogName = searchData;
  // }


  getData(id) {

    this.rt.navigate(['/blog-page-editing'], { queryParams: { id: id } });

    // this.bs.getBlogDataById(id).subscribe(data => {

    //   this.data = data
    //   console.log("get data by id", this.data);

    // })

    // this.rt.navigateByUrl('/blog-page-editing');
  }




}


