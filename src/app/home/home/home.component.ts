import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/loginService/login-service.service';
import { TestService } from 'src/app/test/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    console.log("home")
    this.testService.home().subscribe(data =>{
      console.log("response home")
      console.log(data)
    });
  }

}
