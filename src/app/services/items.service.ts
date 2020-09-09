import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url = "http://localhost:8000/api/gallery";
  
  constructor(private http: HttpClient) { }
  getItems(pageNum){
    return this.http.get(this.url+"?page="+pageNum);
  }

  getFilteredItems(category_id){
    return this.http.get(this.url+"/"+category_id);
  }

  getFilteredPaginatedItems(category_id, page){
    return this.http.get(this.url+"/"+category_id+"?page="+page);
  }
}
