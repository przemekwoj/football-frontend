import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../loginService/login-service.service';

@Component({
  selector: 'github-login',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  private authenticationSegment: string;

  constructor(private loginService: LoginService) { 
    this.authenticationSegment = 'oauth2/authorization/github';
  }

  ngOnInit(): void {
  }

  public authentication() {
    this.loginService.oauth2Authentication(this.authenticationSegment)
  }
}
