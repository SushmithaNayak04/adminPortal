import { Component, Input, OnInit } from '@angular/core';
import { RequestCheckService } from '../request-check.service';
import { requestList} from './request-check';

@Component({
  selector: 'app-request-check',
  templateUrl: './request-check.component.html',
  styleUrls: ['./request-check.component.css']
})
export class RequestCheckComponent implements OnInit {
  requestList: requestList[] = []; 

  constructor(private requestCheckService: RequestCheckService) {
    this.getRequestList();
  }

  getRequestList() {
    this.requestCheckService.getRequestList().subscribe(
        res => {
          
          this.requestList = JSON.parse(JSON.stringify(res));
          console.log(this.requestList);
        },
        error => console.log(error)
    )
  }

  confirmRequest(id: number) {
    this.requestCheckService.confirmRequest(id).subscribe();
    location.reload();
  }

  ngOnInit() {}
}
