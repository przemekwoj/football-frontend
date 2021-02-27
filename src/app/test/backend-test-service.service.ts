import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class BackendTestServiceService {

  private url = "http://localhost:8080/test";
  private url2: string = "http://localhost:8080/oauth2/authorization/google";

  constructor(private http: HttpClient) { }

  getTest() : Observable<Test>{
    return this.http.get<Test>(this.url);
  }

  home() : Observable<any>{
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenKey}`
    })
    console.log("headers : "+headers.get("Authorization"))
    return this.http.get("http://localhost:8080/home", { headers: headers });
  }

  private authorizeEndpoint = '/oauth2/authorization/google'
  private tokenEndpoint = '/login/oauth2/code/google';
  // private tokenEndpoint = '/oauth2/token';

  private authorizeEndpointGithub = '/oauth2/authorization/github'
  private tokenEndpointGitHub = '/login/oauth2/code/github';
  private baseUrl = "http://localhost:8080";
  private tokenKey = 'token';

  getAuthentication() {
    window.open(this.baseUrl+this.authorizeEndpoint,"_self")
    // return this.http.get(this.baseUrl+this.authorizeEndpoint);
  }


  getAuthenticationGitHub() {
    window.open(this.baseUrl+this.authorizeEndpointGithub,"_self")
    // return this.http.get(this.baseUrl+this.authorizeEndpoint);
  }


  logout() {
    window.open(this.baseUrl+"/logout","_self")
    // console.log("logout")
    // this.http.post<any>(this.baseUrl+"/logout", null);

  }

  fetchToken(code: string, state:string): Observable<any> {
    // return this.http.post<any>(" https://accounts.google.com/o/oauth2/v2/auth","code="+code);
    console.log("fetch token : " + this.baseUrl+this.tokenEndpoint+"?code="+code+"&state="+state)
    return this.http.get<any>(this.baseUrl+this.tokenEndpoint+"?code="+code+"&state="+state);
  }

  fetchTokenGitHub(code: string, state:string): Observable<any> {
    console.log("fetch token : " + this.baseUrl+this.tokenEndpointGitHub+"?code="+code+"&state="+state)
    return this.http.get<any>(this.baseUrl+this.tokenEndpointGitHub+"?code="+code+"&state="+state);
  }

  setToken(token:string){
    this.tokenKey = token;
  }
}
