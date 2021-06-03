import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestCheckService {

  constructor (private http:HttpClient){}

  getRequestList() {
    let url = "http://localhost:8080/api/request/all";
    return this.http.get(url, { withCredentials: true });
  }

  confirmRequest(id: number) {
    let url = "http://localhost:8080/api/request/"+id+"/confirm";
    return this.http.get(url, { withCredentials: true });
  }
}
