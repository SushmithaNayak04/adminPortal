import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private http: HttpClient) {}

  sendCredential(username: string, password: string) {
      let url = "http://localhost:8080/index";
      let params = 'username='+username+'&password='+password;
      let headers = new HttpHeaders(
          {
              'Content-Type': 'application/x-www-form-urlencoded'
              // 'Access-Control-Allow-Credentials' : true
          });
          console.log(params);
      return this.http.post(url, params, {headers: headers, withCredentials : true, responseType: 'json'});
  }

  logout() {
      let url = "http://localhost:8080/logout";
      return this.http.get(url, { withCredentials: true, responseType: 'json' });
  }
}
