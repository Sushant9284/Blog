import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogCreationComponent } from './blog-page/blog-creation/blog-creation.component';
import { BlogDisplayPageComponent } from './blog-page/blog-display-page/blog-display-page.component';
import { BlogPageEditingComponent } from './blog-page/blog-page-editing/blog-page-editing.component';
import { BlogPageComponent } from './blog-page/blog-page/blog-page.component';


const routes: Routes = [
  { path: "blog-page", component: BlogPageComponent },
  { path: "home", component: BlogDisplayPageComponent },
  // { path: "blog-edit", component: BlogPageEditingComponent },
  { path: "blog-page-editing", component: BlogPageEditingComponent },
  { path: "blog-creation", component: BlogCreationComponent },
  // { path: "blog-page-editing/:id", component: BlogPageEditingComponent }

  { path: '**', pathMatch: 'full', 
        component: BlogDisplayPageComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
