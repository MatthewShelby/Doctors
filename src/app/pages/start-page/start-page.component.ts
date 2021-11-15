import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, fromEvent, Observable, timer } from 'rxjs';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

@Injectable()
export class StartPageComponent implements OnInit {

  public IsConnected = false;
  public Later = false;

  constructor(
    private http: HttpClient
  ) {
    this.IsConnected = false
  }


  ngOnInit(): void {
    this.initGet();
    setTimeout(() => {
      if (!this.IsConnected) {
        this.Later=true;
      }
    }, 60000);
  }

  initGet() {
    this.IsConnected = false
    this.testGet();
    for (let index = 0; index < 6; index++) {
      setTimeout(() => {
        this.testGet();
      }, 6000);
    }


  }



  testGet() {

    if (this.IsConnected) {
      return
    }
    this.http.get<resultDTO>("https://localhost:44339/api/account/test")
      .subscribe(res => {
        if (res.status == 'Succeed.') {
          console.log(res);
          this.IsConnected = true;
        } else {
          this.IsConnected = false
        }
      }
      );
  }
}

export class resultDTO {
  constructor(
    public status: string,
    public data: string
  ) { }
}
