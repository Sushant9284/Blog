import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ServicesService } from '../blog-services/services.service';

@Component({
  selector: 'app-blog-navbar',
  templateUrl: './blog-navbar.component.html',
  styleUrls: ['./blog-navbar.component.scss']
})
export class BlogNavbarComponent implements OnInit {

  constructor(private bs: ServicesService) { }

  @Input() item: '';

  @Output() searchcriteria = new EventEmitter<string>();

  blogName;

  name: any;
  // a = window.location.reload();

  ngOnInit() {

    this.bs.setSearchField(this.name);

    this.searchcriteria.emit(this.name);

    // let a = window.location.reload();

    // document.getElementById('navbarCollapse').classList.add('show');
    // document.getElementById('navButton').classList.toggle('collapse');


  }
  navListShow() {
    var x = document.getElementById("navbarCollapse");
    var y = document.getElementById('navButton')
    if (x.className === "show navbar-collapse justify-content-between") {
      x.className = "collapse navbar-collapse justify-content-between";
      console.log("nav list hidden");

    } else {
      x.className = "show navbar-collapse justify-content-between";
      console.log("nav list show");

      // x.className = "navcontent";       
    }
  }

  search() {
    var x = document.getElementById('hide-button')
    var y = document.getElementById('show-input')
    if (x.className === "show-search-button") {
      x.className = "collapse";
      y.className = "show-search-button"

      var a = document.getElementById("navbarCollapse");
      var b = document.getElementById('navButton')
      if (a.className === "show navbar-collapse justify-content-between") {
        // b.className = "collapse";
        a.className = "collapse navbar-collapse justify-content-between"
      }


    } else {
      x.className = "show-search-button";
      // x.className = "navcontent";       
      y.className = "collapse"
    }
  }

  cancel() {
    var x = document.getElementById('hide-button')
    var y = document.getElementById('show-input')
    if (y.className === "show-search-button") {
      x.className = "show-search-button";
      y.className = "collapse "
    } else {
      x.className = "show-search-button";
      // x.className = "navcontent";       
      y.className = "show-search-button"
    }

  }

  valuechange(value: string) {
    this.name = value;
    console.log(value);
    this.bs.setSearchField(this.name);
  }

  valuechangeresponsive(value: string) {
    this.name = value;
    console.log(value);
    this.bs.setSearchField(this.name);
  }

  searchThis(value: string) {
    this.name = value
    console.log(this.name);

  }




}
