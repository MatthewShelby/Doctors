import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'

import { CurrentUser, LoginDTO, LoginResultDTO } from '../../Lateral/DTOs';
import { UserService } from '../../Lateral/UserService';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

// @Injectable
export class SigninComponent implements OnInit {

  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private userService:UserService) {

  }


  public registerForm!: FormGroup;


  ngOnInit(): void {
    //let gg:CurrentUser = JSON.parse('%7B%22id%22%3A%22426d2f22-5284-4282-a28b-13d8ae7535d3%22%2C%22email%22%3A%22mrshahabi%40yahoo.com%22%2C%22token%22%3A%22NKHE4XABEV4KQTGY7ICFXPMJ3E36DWQG%22%2C%22expires%22%3A%22%22%7D');

    //let gg: CurrentUser = JSON.parse(this.cookieService.get('CU'));

    console.log('ppp');
    // console.log(gg);
    console.log('kkk');

    this.registerForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]),
      'password': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(100)
      ]),

    })
  }

  ngSubmit() {

    console.log("login-component Submit starts");


    const rd = new LoginDTO(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
    )

    // this.http.post<LoginResultDTO>("https://localhost:44339/api/account/login-user", rd)
    this.http.post<LoginResultDTO>("/api/account/login-user", rd)
      .subscribe(res => {
        console.log(' res: ' + res.data);

        if (res.status === 'Succeed.') {
          console.log('Succeed. res: ' + res);



          const currentUser = new CurrentUser(
            res.data.id,
            res.data.email,
            res.data.token,
            res.data.expires,
          )

          this.userService.setCurrentUser(currentUser);
          
          console.log('current user: ' + currentUser);
          this.cookieService.set('CU', JSON.stringify(currentUser.token));
          this.router.navigate(['./user-home']);

        }
      }
      );
  }
}
