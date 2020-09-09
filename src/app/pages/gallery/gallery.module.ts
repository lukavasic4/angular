import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    GalleryComponent,
    CategoriesComponent,
    ItemsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GalleryComponent,
    CategoriesComponent,
    ItemsComponent,
    PaginationComponent
  ]
})
export class GalleryModule { }
