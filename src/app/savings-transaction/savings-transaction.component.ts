import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { savingsTransactionList} from './savingTransactionList'

@Component({
  selector: 'app-savings-transaction',
  templateUrl: './savings-transaction.component.html',
  styleUrls: ['./savings-transaction.component.css']
})
export class SavingsTransactionComponent implements OnInit {

  username: string = '';
  savingsTransactionList: savingsTransactionList[] =[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });

    this.getSavingsTransactionList();
  }

  getSavingsTransactionList() {
    this.userService.getSavingsTransactionList(this.username).subscribe(
        res => {
          // console.log(JSON.stringify(res));
          this.savingsTransactionList = JSON.parse(JSON.stringify(res));
        },
        error => console.log(error)
    )
  }

  ngOnInit() {}
}

