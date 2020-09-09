import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  url = "http://localhost:8000/api/admingallery?secret_key=1";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id){
    return this.http.get("http://localhost:8000/api/admingallery/"+id+"?secret_key=1");
  }

  insertPost(data){
    return this.http.post(this.url, data);
  }

  updatePost(id, data){
    return this.http.post("http://localhost:8000/api/admingalleryedit/"+id+"?secret_key=1", data);
  }

  deletePost(id){
    return this.http.delete("http://localhost:8000/api/admingallery/"+id+"?secret_key=1");
  }
}
