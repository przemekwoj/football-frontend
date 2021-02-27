import { Component, OnInit } from '@angular/core';
import { BackendTestServiceService } from 'src/app/test/backend-test-service.service';
import { Test } from 'src/app/test/InterfaceTest';

@Component({
  selector: 'gmail-login',
  templateUrl: './gmail-login.component.html',
  styleUrls: ['./gmail-login.component.scss']
})
export class GmailLoginComponent implements OnInit {

  public testObject: Test = new Test("t", "t");

  constructor(private backendService: BackendTestServiceService) { }

  ngOnInit(): void {
    //     this.backendService.getTest()
    // .subscribe(data => {
    //   this.testObject=data;
    //   console.log(this.testObject);
    // });
   
  }

  public open() {
    console.log("open");
    this.backendService.getAuthentication()
    // this.backendService.getAuthentication()
    // .subscribe(data => {
    //   console.log("Autoryzacja complete")
    //   console.log(data);
    // });
  }
}
