import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendTestServiceService } from 'src/app/test/backend-test-service.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  private state:string;
  private code:string;

  constructor(private route: ActivatedRoute,
    private backendService: BackendTestServiceService,
    private router: Router) { 
    this.state =  this.route.snapshot.queryParams["state"];
    this.code =  this.route.snapshot.queryParams["code"];
  }

  ngOnInit(): void {
  
    this.route.queryParams.subscribe(p => {
      // TODO to chyba jest bardzo customowe, trzeba sie temu przjrzec
      console.log("fetchToken")
      console.log("code ")
      console.log(this.code)
      this.backendService.fetchTokenGitHub(p.code, p.state).subscribe(data => {
        console.log("data.accessToken")
        console.log(data.accessToken)
        this.backendService.setToken(data.accessToken);
        this.router.navigate(['/home']);
      })
    })

    // this.backendService.fetchToken(this.code,this.state).subscribe(data => {
    //   console.log("data")
    //   console.log(data)
    //   this.backendService.setToken(data.accessToken)
    // })
  }

}
