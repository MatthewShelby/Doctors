import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../Lateral/UserService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentUser: CurrentUser
  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private userService: UserService


  ) { this.currentUser = new CurrentUser('', '', '', new Date); }

  ngOnInit(): void {
    let token = this.cookieService.get('CU');

    console.log('# cu: ' + token)

    // this.http.get<ResultDTO>("https://localhost:44339/api/account/test-auth")
    this.http.get<ResultDTO>("/api/account/test-auth")
      .subscribe(res => {
        if (res.status === 'Succeed.') {
          this.currentUser = new CurrentUser(res.data.id,
            res.data.email,
            res.data.token,
            res.data.expires
          );
          this.userService.setCurrentUser(this.currentUser);

        }
      }
      )



  }
  public lorem:string=""
}



export class ResultDTO {
  constructor(
    public status: string,
    public data: CurrentUser
  ) { }
}

export class CurrentUser {
  constructor(
    public id: string,
    public email: string,
    public token: string,
    public expires: Date
  ) { }

}