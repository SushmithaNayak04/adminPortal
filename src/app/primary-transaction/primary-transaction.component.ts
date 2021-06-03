import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { primaryTransactionList} from'./primaryTransactionList';

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {
  username: string = '';
  primaryTransactionList: primaryTransactionList[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });

    this.getPrimaryTransactionList();
  }

  getPrimaryTransactionList() {
    this.userService.getPrimaryTransactionList(this.username).subscribe(
        res => {
          console.log((JSON.stringify(res)));
          this.primaryTransactionList = JSON.parse((JSON.stringify(res)));
        },
        error => console.log(error)
    )
  }

  ngOnInit() {}

}
