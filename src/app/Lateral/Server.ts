import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { LoginResultDTO, CurrentUser, resultDTO } from './DTOs'



@Injectable()
export class Server {
      isConnected = new BehaviorSubject<boolean>(false);
      isLoggedIn = new BehaviorSubject<boolean>(false);
      currentUser: BehaviorSubject<CurrentUser>;
      public staticCurrentUser = new CurrentUser('', '', '', null);

      constructor(
            private http: HttpClient,
            private cookieService: CookieService,
            private router: Router,
      ) { this.currentUser = new BehaviorSubject<CurrentUser>(new CurrentUser('', '', '', null)) }


      LogOutUser() {
            console.log('LogOutUser call');
            this.http.get<resultDTO>("/api/account/logout-user").subscribe(res => {

                  console.log('LogOutUser res: ' + JSON.stringify(res));
                  if (res.data === 'User has been logged out.') {
                        this.cookieService.delete('CU');
                        this.isLoggedIn.next(false);
                        this.currentUser.next(new CurrentUser('', '', '', null))
                        this.router.navigate(['./'])
                  }
                  return
            })
            this.router.navigate(['./'])
      }

      checkUserAuth(): Observable<boolean> {
            return this.isLoggedIn;
      }


      GetCurrentUser() {

            console.log('GetCurrentUser call');
            this.http.get<LoginResultDTO>("/api/account/who-am-i").subscribe(res => {

                  console.log('who-am-i res call: ' + JSON.stringify(res));
                  this.currentUser.next(res.data);
                  console.log('who-am-i res currentUser: ' + JSON.stringify(this.currentUser.value));
                  this.isLoggedIn.next(true);
                  this.staticCurrentUser = res.data
                  return
            })

      }

      IsConnected() {
            console.log('IsConnected call');
            this.http.get<boolean>("/api/account/isConnected").subscribe(res => {
                  this.isConnected.next(res);
            }
            )
      }

}