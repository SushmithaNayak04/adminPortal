import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import {userList} from './userList';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent implements OnInit {

  userList: userList[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
        res => {
          console.log(res);
          this.userList = JSON.parse(JSON.stringify(res));
          console.log(this.userList);
        },
        error => console.log(error)
    )
  }

  onSelectPrimary(username: string) {
    this.router.navigate(['/primaryTransaction', username]);
  }

  onSelectSavings(username: string) {
    this.router.navigate(['/savingsTransaction', username]);
  }

  enableUser(username: string) {
    this.userService.enableUser(username).subscribe();
    location.reload();
  }

  disableUser(username: string) {
    this.userService.disableUser(username).subscribe();
    location.reload();
  }


  ngOnInit() {
  }

}
