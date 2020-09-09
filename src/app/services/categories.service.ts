import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url = "http://localhost:8000/api/categories";

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.url);
  }
}
