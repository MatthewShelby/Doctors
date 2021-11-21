import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { Server } from './Lateral/Server';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;

  constructor(
    private server: Server,
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {


    // // Setting logged in user in localstorage else null
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {

    return this.server.isLoggedIn.getValue();

  }



  // // Auth logic to run auth providers
  // AuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //   .then((result) => {
  //      this.ngZone.run(() => {
  //         this.router.navigate(['user-profile']);
  //       })
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }



}