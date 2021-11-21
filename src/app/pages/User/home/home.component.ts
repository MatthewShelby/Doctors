import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Server } from 'src/app/Lateral/Server';
import { CurrentUser, } from 'src/app/Lateral/DTOs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
  styleUrls: ['../sharedStyle.css']
})

export class HomeComponent implements OnInit {

  public isLoggedIn = false;
  public currentUser: CurrentUser;
  private userSub: Subscription;
  private loggedIn: Subscription;



  constructor(
    private server: Server,
    private footer: FooterComponent
  ) {
    this.userSub = new Subscription();
    this.loggedIn = new Subscription();
    this.currentUser = new CurrentUser('', '', '', null)
    //this.footer.setSituation();

  }

  ngOnInit(): void {

    //this.server.GetCurrentUser();
    this.currentUser = this.server.currentUser.getValue();
    this.footer.setSituation();
    setTimeout(()=>{this.footer.setSituation();
    console.log('again in 1000')},3000)
  }

  onLogOut() {
    this.server.LogOutUser()
  }
}