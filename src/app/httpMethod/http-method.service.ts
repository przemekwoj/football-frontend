import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../security/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodService {

  private baseUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient, 
    private authenticationService: AuthenticationService) { }

  public post<T>(urlSegment:string, body?:any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.baseUrl + urlSegment, this.authenticationService.getToken(),{ headers: this.prepareHeaders(headers) })  

  }

  public get<T>(urlSegment:string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(this.baseUrl+urlSegment, { headers: this.prepareHeaders(headers)});
  }

  private prepareHeaders(additionalHeaders?: HttpHeaders) {
      return new HttpHeaders({
        ...additionalHeaders,
        'Authorization': `Bearer ${this.authenticationService.getToken()}`
      })
  }
}
