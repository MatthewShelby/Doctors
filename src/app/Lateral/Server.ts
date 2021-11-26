import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject, Subscriber, take } from 'rxjs';
import { LoginResultDTO, CurrentUser, resultDTO, LoginDTO } from './DTOs'



@Injectable()
export class 
Server {
      isConnected = new BehaviorSubject<boolean>(false);
      isLoggedIn = new BehaviorSubject<boolean>(false);
      public emailCon = new BehaviorSubject<boolean>(false);
      currentUser: BehaviorSubject<CurrentUser>;
      fNum = new BehaviorSubject<number>(0);
      sNum = new Observable<number>();

      public staticCurrentUser = new CurrentUser('', '', '', null);

      constructor(
            private http: HttpClient,
            private cookieService: CookieService,
            private router: Router,
      ) { this.currentUser = new BehaviorSubject<CurrentUser>(new CurrentUser('', '', '', null)) }


      GerNum() {
            this.http.get<number>('/api/account/num').subscribe(
                  res => {
                        this.fNum.next(res);
                  })
      }

      getCurrentNum(): Observable<number> {
            return this.fNum;
      }

      getTheNum(): Observable<number> {
            return this.http.get<number>('/api/account/num');
      }



      SignInUser(userData: LoginDTO) {

            // this.http.post<LoginResultDTO>("https://localhost:44339/api/account/login-user", rd)
            this.http.post<LoginResultDTO>("/api/account/login-user", userData)
                  .subscribe(res => {
                        console.log(' res: ' + res.data);

                        if (res.status === 'Succeed.') {
                              console.log('Succeed on sign in##. res: ' + res);

                              const currentUser = new CurrentUser(
                                    res.data.id,
                                    res.data.email,
                                    res.data.token,
                                    res.data.expires,
                              )
                              this.cookieService.set('CU', res.data.token);

                              this.currentUser.next(currentUser);
                              this.isLoggedIn.next(true);
                              /*
                              console.log('current user: ' + currentUser);
                              this.cookieService.set('CU', currentUser.token);
                              console.log('home sets token to cookies ' + JSON.stringify(currentUser.token));
                              this.footer.setSituation();
                              console.log('home setSituation done ');*/
                        }
                        else {
                              //this.openSnackBar(res.data.id);
                        }
                  });

      }




      checkEmailCon(activationCode: string, userId: string): boolean {

            this.activateUserP(activationCode, userId);
            return this.emailCon.getValue();
      }


      activateUserP(activationCode: string, userId: string) {

            this.http.get<resultDTO>('/api/account/confirm-email?userId=' + userId
                  + '&code=' + activationCode).subscribe(
                        res => {
                              console.log('Server #### res: ' + JSON.stringify(res));
                              if (res.status === 'Succeed.') {
                                    console.log('Server #### @@@@@ ####' + JSON.stringify(
                                          res
                                    ));
                                    this.emailCon.next(true);

                              } else {
                                    this.emailCon.next(false);
                              }
                        }
                  )
      }




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