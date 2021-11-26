import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from '../Lateral/Server';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { interval, throwError, catchError, of, Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { resultDTO, User } from '../Lateral/DTOs';
// import { DataService } from '../services/data-ser.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  constructor(
    // private data: DataService,
  ) { }

  ngOnInit(): void {
  }}
  // color: ThemePalette = 'primary';
  // public users: User[] = [];

  // public num = new Observable<number>();

  // public showNum: number = 0;
  // public aaa: User[] = [];

    //this.users = this.data.getUsers();
    // this.getUsersNew()
    // this.data.tickObservable();
    // this.num.subscribe(res => {
    //   this.showNum = res;
    // })
  

  // grtNum() {
  //   // this.data.callNum().subscribe((data: Config) => this.config = { ...data });
  // }



  // getUsersNew(): void {
  //   this.data.getUsersObs()
  //     .subscribe(users => this.users = users);
  // }


  // onClick() {
  //   //this.aaa = this.data.fetchUsers();
  //   //console.log('afterFetch aaa: '+this.aaa);

  //   // this.num++;
  //   let f: number = 0;

  //   f++;
  //   this.showNum++;
  //   this.data.setNums(this.showNum);
  // }
















// import { config } from 'process';
// import { strictEqual } from 'assert';

class CustomTimeoutError extends Error {
  constructor() {
    super('It was too slow');
    this.name = 'CustomTimeoutError';
  }
}

const slow$ = interval(900);

slow$.pipe(
  timeout({
    each: 1000,
    with: () => throwError(() => new CustomTimeoutError())
  })
)
  .subscribe({
    error: console.error
  })