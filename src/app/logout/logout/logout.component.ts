import { Component, OnInit } from '@angular/core';
import { BackendTestServiceService } from 'src/app/test/backend-test-service.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private backendService: BackendTestServiceService) { }

  ngOnInit(): void {
  }

  public logout() {
    this.backendService.logout()
  }
}
