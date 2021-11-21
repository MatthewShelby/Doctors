import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/Lateral/Server';
import { CurrentUser, LoginDTO, LoginResultDTO } from '../../../Lateral/DTOs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../sharedStyle.css']

  // styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser: CurrentUser;
  constructor(private server: Server,
    
  ) {
    this.currentUser = this.server.currentUser.getValue();
   }
  


  ngOnInit(): void {
    
  }


}
