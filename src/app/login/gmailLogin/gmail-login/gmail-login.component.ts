import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../loginService/login-service.service';

@Component({
  selector: 'gmail-login',
  templateUrl: './gmail-login.component.html',
  styleUrls: ['./gmail-login.component.scss']
})
export class GmailLoginComponent implements OnInit {

  private authenticationSegment: string;

  constructor(private loginService: LoginService) {
    this.authenticationSegment = "oauth2/authorization/google";
   }

  ngOnInit(): void {
  }

  public open() {
    this.loginService.oauth2Authentication(this.authenticationSegment)
  }
}
