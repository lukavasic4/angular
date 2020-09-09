import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url = "http://localhost:8000/api/roles?secret_key=1";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }
}
