import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  loggedIn: boolean;

  constructor(private loginService: LoginService, private router : Router) {
    if(!localStorage.getItem('PortalAdminHasLoggedIn')) {
      localStorage.setItem('PortalAdminHasLoggedIn', '');
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logout(){
    this.loginService.logout().subscribe(
        res => {
          localStorage.setItem('PortalAdminHasLoggedIn', '');
        },
          err => {
            if (err.url == 'http://localhost:8080/index?logout') {
            this.loggedIn=true;
            localStorage.setItem('PortalAdminHasLoggedIn', '');
            } else console.log(err)
          }
        );
    this.router.navigate(['/login']);
    location.reload();
  }

  getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {
  }

}
