import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrentUser, LoginDTO, LoginResultDTO } from '../../Lateral/DTOs';
import { FooterComponent } from '../User/footer/footer.component';
import { Server } from 'src/app/Lateral/Server';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

// @Injectable
export class SigninComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private footer: FooterComponent,
    private _snackBar: MatSnackBar,
    private server: Server) {

  }


  public registerForm!: FormGroup;

  openSnackBar(error: string) {
    this._snackBar.open('Error: ' + error, undefined, { duration: 5000, verticalPosition: 'top', panelClass: ['blue-snackbar'] })
  }

  ngOnInit(): void {


    setTimeout(() => {
      let check: boolean = this.server.isLoggedIn.getValue()
      if (check) {
        this.router.navigate(['../user-home']);

      }
    }, 2000)
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


    const rd = new LoginDTO(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
    )

    this.server.SignInUser(rd);

    /*







    // this.http.post<LoginResultDTO>("https://localhost:44339/api/account/login-user", rd)
    this.http.post<LoginResultDTO>("/api/account/login-user", rd)
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
          console.log('current user: ' + currentUser);
          this.cookieService.set('CU', currentUser.token);
          console.log('home sets token to cookies ' + JSON.stringify(currentUser.token));
          this.footer.setSituation();
          console.log('home setSituation done ');
        }
        else {
          this.openSnackBar(res.data.id);
        }
      });


    this.server.GetCurrentUser();
*/
    setTimeout(() => {
      let check: boolean = this.server.isLoggedIn.getValue()
      console.log('reout 111 ######')

      if (check) {
        this.router.navigate(['../user-home']);
        console.log('reouter####################')
      }
    }, 2000)
  }
}
