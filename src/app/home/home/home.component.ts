import { Component, OnInit } from '@angular/core';
import { BackendTestServiceService } from 'src/app/test/backend-test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private backendService: BackendTestServiceService) { }

  ngOnInit(): void {
    console.log("home")
    this.backendService.home().subscribe(data =>{
      console.log("response home")
      console.log(data)
    });
  }

}
