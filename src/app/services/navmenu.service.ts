import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavmenuService {

  url = 'http://localhost:8000/api/menu';

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(this.url);
  }
}
