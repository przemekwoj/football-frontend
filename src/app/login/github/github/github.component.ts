import { Component, OnInit } from '@angular/core';
import { BackendTestServiceService } from 'src/app/test/backend-test-service.service';

@Component({
  selector: 'github-login',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor(private backendService: BackendTestServiceService) { }

  ngOnInit(): void {
  }

  public open() {
    console.log("open");
    this.backendService.getAuthenticationGitHub()

  }
}
