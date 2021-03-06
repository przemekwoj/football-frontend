import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  private authenticated: boolean = false;
  private tokenKey = 'token';

  constructor(private router: Router) {
    console.log("authservice")
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (localStorage.getItem(this.tokenKey) == null) {
      this.router.navigate(['login']);
    }
    return true;
  }

  public setToken(token:string){
    localStorage.setItem(this.tokenKey, token);
  }

  public removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  public getToken() {
    return localStorage.getItem(this.tokenKey);
  } 
}
