import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { resultDTO } from 'src/app/Lateral/DTOs';
import { Server } from 'src/app/Lateral/Server';
import { DataPackage, DialogDataExample } from 'src/app/Material/Dialog/dialog';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  constructor(
    private server: Server,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: DialogDataExample,
    private http: HttpClient,

  ) { }

  //http://localhost:4200/email-confirmation/%7B%22name%22:%22Mory%22,%22age%22:%2231%22%7D

  //http://localhost:4200/email-confirmation/activeCode=1234&userId=qwer

  ngOnInit(): void {
    let activeCode: string = this.activatedRoute.snapshot.params['activeCode'];
    let userId: string = this.activatedRoute.snapshot.params['userId'];

      
this.server.checkEmailCon(activeCode,userId)

let res:boolean=false;
setTimeout(() => {

res = this.server.emailCon.getValue();

}, 3000)
    console.log(' email confirm res1: ' + res);

    setTimeout(() => {
      console.log(' email confirm res2: '+res);

      if (res) {
        this.onSuccess();
      } else {
        this.onFailure();
      }
    }, 5000)

  }

  getConfig(activeCode: string, userId: string) {
    // now returns an Observable of Config
    return this.http.get<resultDTO>('/api/account/confirm-email?userId=' + userId
      + '&code=' + activeCode)
  }




  onSuccess() {
    this.dialog.datapack = new DataPackage('Succeed.',
      'Your Account has been Activated',
      'Now you can login using your  email and password. ' +
      'You\'ll be redirected to Sign In page');
    this.dialog.openDialog();
    this.router.navigate(['./signin']);
  }

  onFailure() {
    this.dialog.datapack = new DataPackage('Error ',
      'Couldn\'t activate your account.',
      'Please contact our support team.');
    this.dialog.openDialog();
    this.router.navigate(['./signin']);

  }

}
