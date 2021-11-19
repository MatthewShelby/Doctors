import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      'confirmPassword': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(100)
      ]),

    })
  }
  ngSubmit() {


    const rd = new RegisterDTO(
      this.registerForm.controls['email'].value,
      this.registerForm.controls['password'].value,
      this.registerForm.controls['confirmPassword'].value,

    )

    console.log(rd);

    // this.http.post<RegisterResulttDTO>("https://localhost:44339/api/account/register-user", rd)
    this.http.post<RegisterResulttDTO>("/api/account/register-user", rd)
      .subscribe(res => {
        console.log(res)
      }
      );

  }
}
export class RegisterResulttDTO {
  constructor(
    public status: string,
    public data: string
  ) { }
}

export class RegisterDTO {
  constructor(
    public email: string,
    public password: string,
    public confirmPassword: string
  ) { }
}
