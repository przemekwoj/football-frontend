import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { HttpMethodService } from 'src/app/httpMethod/http-method.service';
import { AppSettings } from 'src/app/enviroments/appSettings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpMethodService, 
    private router: Router,
    private authenticationService: AuthenticationService) { }

  oauth2Authentication(authenticationSegment: string) {
    window.open(AppSettings.BASE_URL + authenticationSegment,"_self")
  }

  fetchTokenAndRidirect(tokenSegment: string) {
    this.http.get<any>(tokenSegment).subscribe(data => {
        this.authenticationService.setToken(data.accessToken);
        this.router.navigate(['/home']);
      })
  }
}
