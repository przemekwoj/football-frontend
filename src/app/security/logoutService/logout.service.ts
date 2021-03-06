import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpMethodService } from 'src/app/httpMethod/http-method.service';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private readonly logoutSegment: string = "logout"

  constructor(private http: HttpMethodService, 
     private router: Router,
     private authenticationService: AuthenticationService) { }

  logout() {
    this.http.post(this.logoutSegment, this.authenticationService.getToken())  
      .subscribe(() => {
        this.authenticationService.removeToken();
        this.router.navigate(['/login']);
      });
  }
}
