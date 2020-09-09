import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  url = "http://localhost:8000/api/gallery/pagination_page";
  constructor(private http: HttpClient) { }
  getPagination(idKat = "0", value = ""){
    return this.http.get(this.url+`?idKat=${idKat}&value=${value}`);
  }
}
