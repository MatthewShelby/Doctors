import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Subscription } from 'rxjs';
import { CurrentUser, LoginDTO } from 'src/app/Lateral/DTOs';
import { Server } from "../../Lateral/Server"

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit {

  public IsConnected = false;
  public isLoggedIn = false;
  public currentUser: CurrentUser = new CurrentUser('', '', '', null);
  private userSub: Subscription;
  private connection: Subscription;
  private loggedIn: Subscription;


  public Later = false;


  constructor(
    private router: Router,
    private server: Server,
  ) {
    this.userSub = new Subscription;
    this.connection = new Subscription();
    this.loggedIn = new Subscription();
  }


  ngOnInit(): void {

    setTimeout(() => {
      this.server.IsConnected();
      this.server.GetCurrentUser();

      this.connection = this.server.isConnected.subscribe(conn => {
        this.IsConnected = conn;
      });

      this.userSub = this.server.currentUser.subscribe(user => {
        this.currentUser = user;

      })

      this.loggedIn = this.server.isLoggedIn.subscribe(llog => {
        this.isLoggedIn = llog;
      })
    }, 300)


    // setTimeout(() => {
    //   console.log('start page => current user: ' + JSON.stringify(this.currentUser));
    //   // console.log('start page => IsConnected: ' + JSON.stringify(this.IsConnected));
    //   console.log('start page => isLoggedIn: ' + JSON.stringify(this.isLoggedIn));

    //   if (this.isLoggedIn) {
    //     this.router.navigate(['./user-home']);
    //   }
    // }, 1000)

  }







}










