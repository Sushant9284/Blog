import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BlogDisplayPageComponent } from './blog-page/blog-display-page/blog-display-page.component';
import { ServicesService } from './blog-page/blog-services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';

  value: any;

  constructor(private bs:ServicesService){

  }

  ngOnInit() {

  }

  valuechange(abc: string) {
    this.value = abc;
    console.log(this.value);
    this.bs.setSearchField(this.value);
    
  }
}
