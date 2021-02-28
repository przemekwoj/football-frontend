import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/loginService/login-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-callback',
  templateUrl: './github-callback.component.html',
  styleUrls: ['./github-callback.component.scss']
})
export class GithubCallbackComponent implements OnInit {

  private tokenSegment = 'login/oauth2/code/github';

  constructor(private route: ActivatedRoute,
    private loginService: LoginService) { 

      }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      const url = this.tokenSegment + "?code="+param.code+"&state="+param.state
      this.loginService.fetchTokenAndRidirect(url);
    })
  }
}
