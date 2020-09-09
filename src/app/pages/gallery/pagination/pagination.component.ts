import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pagesNum:any;
  finalNum:any = [];

  @Output() public childEvent = new EventEmitter();
  @Input() public categoryNumber;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getPagesNum();
  }

  ngOnChanges(...args: any[]): void {
    this.getPagesNum(this.categoryNumber);
  }

  getPagesNum(idKat = "0"){
    this.paginationService.getPagination(idKat).subscribe(num => {
      this.pagesNum = num;
      let ddNum = this.displayNum(num);
      this.finalNum = [];
      for(let i=0; i < ddNum; i++){
        this.finalNum[i] = i+1;
      }
    })
  }

  displayNum(num){
    const perPage = 4;
    let sum = Math.ceil(num/perPage);
    return sum;
  }

  fireEmitt(num:number){
    this.childEvent.emit(num);
  }
}
