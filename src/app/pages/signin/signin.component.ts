import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http: HttpClient) { }


  public registerForm!: FormGroup;


  ngOnInit(): void {
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
    console.log(this.registerForm.controls);



    const rd = new LoginDTO(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,

    )

    console.log(rd);

    this.http.post<LoginResultDTO>("https://localhost:44339/api/account/login-user", rd)
      .subscribe(res => {
        console.log(res)
      }
      );

  }
}

export class LoginResultDTO {
  constructor(
    public status: string,
    public data: string
  ) { }
}

export class LoginDTO {
  constructor(
    public email: string,
    public password: string
  ) { }
}
