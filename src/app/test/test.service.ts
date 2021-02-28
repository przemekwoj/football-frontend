import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/loginService/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

    private baseUrl: string = "http://localhost:8080/";
    private redirectUrl = this.baseUrl + "home";

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

    home() : Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.loginService.getToken()}`
    })
    return this.http.get(this.redirectUrl, { headers: headers });
  }
}
