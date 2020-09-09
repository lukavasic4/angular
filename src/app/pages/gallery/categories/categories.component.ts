import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  @Output() public categoryEvent = new EventEmitter();

  constructor(private categoriesServices: CategoriesService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoriesServices.getCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  catEvent(cat_id){
    this.categoryEvent.emit(cat_id);
  }
}
