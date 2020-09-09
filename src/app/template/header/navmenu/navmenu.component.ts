import { Component, OnInit } from '@angular/core';
import { NavmenuService } from 'src/app/services/navmenu.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  navmenu;
  constructor(private navmenuService: NavmenuService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getMenu();
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if(loggedIn){
      this.auth.loginStatus = true;
    }
  }

  getMenu(){
    this.navmenuService.getMenu()
      .subscribe(menu => {
        this.navmenu = menu;
      }, error => console.log('oops', error));
  }

  logout(){
    this.auth.logout();
  }
}
