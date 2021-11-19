import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentUser, LoginDTO, LoginResultDTO } from '../Lateral/DTOs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: BehaviorSubject<CurrentUser> = new BehaviorSubject<CurrentUser>(new CurrentUser('', '', '', null));
  private userLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) {
  }



  setCurrentUser(user: CurrentUser): void {
    console.log('SET current user om user service SET method');
    this.userLogin.next(true);
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<CurrentUser> {
    console.log('getting current user om user service get method');
    return this.currentUser;
  }

  isUserLogin(): Observable<boolean> {
    this.userLogin.next(true);
    return this.userLogin;
  }
  
  //   registerUser(registerData: RegisterUserDTO): Observable<any> {
  //     return this.http.post<any>('/account/register', registerData);
  //   }

  //   loginUser(loginUserDTO: LoginUserDTO): Observable<ILoginUserAccount> {
  //     return this.http.post<ILoginUserAccount>('/account/login', loginUserDTO);
  //   }

  //   checkUserAuth(): Observable<ICheckUserAuthResult> {
  //     return this.http.post<ICheckUserAuthResult>('/account/check-auth', null);
  //   }

  logOutUser(): Observable<any> {
    return this.http.get('/account/sign-out');
  }

  activateUser(emailActiveCode: string): Observable<any> {
    return this.http.get('/account/activate-account/' + emailActiveCode);
  }
}
