import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "http://localhost:8080/";

  private token = '';

  constructor(private http: HttpClient, private router: Router) { }

  oauth2Authentication(authenticationSegment: string) {
    window.open(this.baseUrl + authenticationSegment,"_self")
  }

  fetchTokenAndRidirect(tokenSegment: string) {
    this.http.get<any>(this.baseUrl + tokenSegment).subscribe(data => {
        this.setToken(data.accessToken);
        this.router.navigate(['/home']);
      })
  }

  private setToken(token:string){
    this.token = token;
  }

  public getToken() {
    return this.token;
  } 
}
