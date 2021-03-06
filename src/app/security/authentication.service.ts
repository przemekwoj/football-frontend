import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token = '';

  constructor() { }

  public setToken(token:string){
    this.token = token;
  }

  public removeToken() {
    this.token = '';
  }

  public getToken() {
    return this.token;
  } 
}
