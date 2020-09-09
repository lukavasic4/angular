import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items;
  @Input() public parentData;
  @Input() public categoryNumber;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnChanges(...args: any[]): void {
    if(this.categoryNumber == undefined){
      this.getAll();
    }
    else{
      this.getAllFiltered();
    }

    if(this.parentData != undefined && this.categoryNumber != undefined){
      this.getAllFIlteredPaginated();
    }
  }

  getAll(){
    this.itemsService.getItems(this.parentData).subscribe(items => {
      //console.log(items);
      this.items = items;
    });
  }

  getAllFiltered(){
    this.itemsService.getFilteredItems(this.categoryNumber).subscribe(items => {
      //console.log(items);
      this.items = items;
    })
  }

  getAllFIlteredPaginated(){
    this.itemsService.getFilteredPaginatedItems(this.categoryNumber, this.parentData).subscribe(items => {
      this.items = items;
    })
  }
}
