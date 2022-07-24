import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../blog-services/services.service';

@Component({
  selector: 'app-blog-search-input',
  templateUrl: './blog-search-input.component.html',
  styleUrls: ['./blog-search-input.component.scss']
})
export class BlogSearchInputComponent implements OnInit {

  @Input() item: '';

  @Output() searchcriteria = new EventEmitter<string>();

  blogName;

  name: any;
  
  constructor(private bs:ServicesService) { }

  ngOnInit() {
  }

  valuechangeresponsive(value: string) {
    this.name = value;
    console.log(value);
    this.bs.setSearchField(this.name);
  }

}
