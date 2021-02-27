import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from './InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl: string = "http://localhost:8080/";
  private googleTokenEndpoint: string = "oauth2/authorization/google";
  private googleAuthorizeEndpoint = '/oauth2/authorization/google'
  private redirect = "home";
  private token = '';

  constructor(private http: HttpClient) { }

  getAuthentication() {
    window.open(this.baseUrl+this.googleAuthorizeEndpoint,"_self")
  }


  fetchGoogleToken(code: string, state:string): Observable<any> {
    return this.http.get<any>(this.baseUrl+this.googleTokenEndpoint+"?code="+code+"&state="+state);
  }

  setToken(token:string){
    this.token = token;
  }

  home() : Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
    return this.http.get(this.baseUrl + this.redirect, { headers: headers });
  }
}
