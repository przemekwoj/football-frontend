import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { HttpMethodService } from 'src/app/httpMethod/http-method.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpMethodService, 
    private router: Router,
    private authenticationService: AuthenticationService) { }

  oauth2Authentication(authenticationSegment: string) {
    window.open(this.baseUrl + authenticationSegment,"_self")
  }

  fetchTokenAndRidirect(tokenSegment: string) {
    this.http.get<any>(tokenSegment).subscribe(data => {
        this.authenticationService.setToken(data.accessToken);
        this.router.navigate(['/home']);
      })
  }
}
