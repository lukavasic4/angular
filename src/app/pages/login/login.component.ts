import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(event){
    const email = event.target.querySelector('#logEmail').value;
    const password = event.target.querySelector('#logPassword').value;

    this.auth.getUserData(email, password).subscribe(data => {
      console.log(data);
      localStorage.setItem("loggedIn", "true");
      this.auth.loginStatus = true;
      this.router.navigate(['/']);
    }, error => window.alert(error.error.message));
  }
}
