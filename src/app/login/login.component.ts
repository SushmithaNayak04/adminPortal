import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string = '';
  password: string = '';

  constructor (private loginService: LoginService, private router: Router) {
      if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
          this.loggedIn = false;
      } else {
          this.loggedIn = true;
      }
  }

  onSubmit() {
      if (this.username == 'Admin' || this.username == 'admin') {
      this.loginService.sendCredential(this.username, this.password).subscribe(
          res => {
              this.loggedIn=true;
              localStorage.setItem('PortalAdminHasLoggedIn', 'true');
              location.reload();
          },
          err => {
              if (err.url == 'http://localhost:8080/userFront') {
              this.loggedIn=true;
              localStorage.setItem('PortalAdminHasLoggedIn', 'true');
              location.reload();
              } else { alert('Invalid credentials!'); console.log(err); }
          }
      );
        } else {
            alert("please login as admin");
        }
  }

  ngOnInit() {}

}
