import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPageComponent } from './blog-page/blog-page/blog-page.component';
import { BlogDisplayPageComponent } from './blog-page/blog-display-page/blog-display-page.component';
import { BlogPageEditingComponent } from './blog-page/blog-page-editing/blog-page-editing.component';
import { FilterpipePipe } from './blog-pipe/filterpipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BlogNavbarComponent } from './blog-page/blog-navbar/blog-navbar.component';

import { BlogCreationComponent } from './blog-page/blog-creation/blog-creation.component';
import { BlogFooterComponent } from './blog-page/blog-footer/blog-footer.component';
import { BlogSearchInputComponent } from './blog-page/blog-search-input/blog-search-input.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    BlogDisplayPageComponent,
    BlogPageEditingComponent,
    FilterpipePipe,
    BlogNavbarComponent,
    BlogCreationComponent,
    BlogFooterComponent,
    BlogSearchInputComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule ,
    Ng2SearchPipeModule 
  ],
  providers: [FilterpipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
