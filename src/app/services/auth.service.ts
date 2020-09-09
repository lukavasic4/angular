import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8000/api/login";
  public loginStatus = false;

  constructor(private http: HttpClient, private router: Router) { }

  getUserData(email, password){
    return this.http.post(this.url, {
      logEmail: email,
      logPassword: password
    });
  }

  logout(){
    this.http.get("http://localhost:8000/api/logout");
    localStorage.removeItem('loggedIn');
    this.loginStatus = false;
    this.router.navigate(['/']);
  }

}
