import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Server } from 'src/app/Lateral/Server';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {


  public isLoggedIn = false;
  private loggedIn: Subscription;

  constructor(
    private server: Server,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loggedIn = new Subscription();



    
  }
  userSignedIn = false;
  ngOnInit(): void {
    console.log('route: '+this.route.url.toString());

    setTimeout(() => {
      this.server.GetCurrentUser();

      this.loggedIn = this.server.isLoggedIn.subscribe(llog => {
        this.isLoggedIn = llog;
      })
    }, 1000)



  }

}
