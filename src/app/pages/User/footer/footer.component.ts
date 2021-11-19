import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private route: Router) {


    this.setSituation();

   }

  public nna: string = 'undefined.';
  public isProfile = false;
  public isSearch = false;
  public isHome = false; 
  public isAppointments = false;
  public isBookmarks = false;


  ngOnInit(): void {
    this.setSituation();
    // this.nna = this.route.url;  

  }













  setSituation() {
    this.makeAllfasle();

    switch (this.route.url) {
      case '/user-home':
        this.isHome = true;
        break;

      case '/user-profile':
        this.isProfile = true;
        break;

      case '/user-search':
        this.isSearch = true;
        break;

      case '/user-appointments':
        this.isAppointments = true;
        break;

      case '/user-bookmarks':
        this.isBookmarks = true;
        break;



      default:
        break;
    }
  }


  makeAllfasle() {
    this.isProfile = false;
    this.isSearch = false;
    this.isHome = false;
    this.isAppointments = false;
    this.isBookmarks = false;
  }
}
