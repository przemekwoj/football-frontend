import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/security/login/loginService/login-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-callback',
  templateUrl: './google-callback.component.html',
  styleUrls: ['./google-callback.component.scss']
})
export class GoogleCallbackComponent implements OnInit {
  private tokenSegment: string = 'login/oauth2/code/google';

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
