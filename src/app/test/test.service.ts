import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpMethodService } from '../httpMethod/http-method.service';
import { AuthenticationService } from '../security/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpMethodService) { }

    home() : Observable<any>{
    return this.http.get("home");
  }

  home2() : Observable<any>{
    return this.http.get("home2");
  }
}
