import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../logoutService/logout.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }

  ngOnInit(): void {
  }

  public logout() {
     this.logoutService.logout()
  }
}
