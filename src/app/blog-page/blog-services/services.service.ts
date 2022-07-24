import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { Observable } from 'rxjs';

import * as Data from '../../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  dataUpdated:EventEmitter<any>=new EventEmitter();

  searchField:string;

  constructor(private http:HttpClient) { }

  data='../../../assets/data/data.json';

  blogUrl='http://localhost:8080/blogs'

  setSearchField(data:any){
    this.dataUpdated.emit(data);
  }

  getSearchField(){
    console.log(this.searchField);
    
    return this.searchField;
  }

  postBlogData(data){
    return this.http.post<any>(this.blogUrl+'/',data);
  }

  getBlogData(){
    // return this.http.get(this.blogUrl);
    return this.http.get(this.data);
  }
  getBlogDataById(id:any):Observable<any>{
    return this.http.get<any>(this.blogUrl+'/'+id);
  }

  editBlogData(data){
    return this.http.put(this.blogUrl+'/',data);
  }

}
