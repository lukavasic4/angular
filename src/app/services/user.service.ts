import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8000/api/users?secret_key=1";
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }
  
  getOne(id){
    return this.http.get("http://localhost:8000/api/users/"+id+"?secret_key=1");
  }

  updateUser(id, data){
    return this.http.post("http://localhost:8000/api/useredit/"+id+"?secret_key=1", data);
  }

  insertUser(data){
    return this.http.post(this.url, data);
  }

  deleteUser(id){
    return this.http.delete("http://localhost:8000/api/users/"+id+"?secret_key=1");
  }
}
