// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of, map, Subject, } from 'rxjs';
// import { User, resultDTO } from '../Lateral/DTOs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   private USERS: User[] = [new User('user1'), new User('user2'), new User('user3'), new User('user4'),];
//   private Num: number = 0;
//   numChanged = new Subject<number>();
//   constructor(
//     private http: HttpClient,
//   ) { }



//   tickObservable() {
//     console.log('tickObservable###');

//     return this.numChanged.asObservable();
//   }

//   setNums(num: number) {
//     console.log('setNums-num: '+num);
//     //this.Num = num;
//     this.numChanged.next(num)
//   }
//   getUsers(): User[] {
//     return this.USERS;
//   }


//   getConfig() {
//     return this.http.get<number>('/api/account/num');
//   }

//   fetchUsers(): User[] {
//     const userArray: User[] = [];

//     this.http.get<User[]>('/api/account/gau').pipe(
//       map(response => {
//         for (const id in response) {
//           if (response.hasOwnProperty(id)) {
//             console.log({ ...response[id] });
//             userArray.push({ ...response[id] });
//           }
//         }
//       })
//     ).subscribe();
//     return userArray;

//   }




//   callNum() {
//     this.http.get<number>('/api/account/num')
//       .subscribe(res => {
//         this.setNums(res)
//       }
//       );
//   }


//   getNums(): number {
//     return this.Num;
//   }




//   getUsersObs(): Observable<User[]> {
//     const users = of(this.USERS);
//     return users;
//   }


//   getNum(): Observable<number> {

//     const num = of(this.Num);

//     // = this.http.get<number>('/api/account/num').subscribe(res => {
//     //   return res;
//     // });

//     return num;
//   }

// }
