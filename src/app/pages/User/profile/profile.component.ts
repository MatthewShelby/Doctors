import { Component, OnInit } from '@angular/core';
import { CurrentUser, LoginDTO, LoginResultDTO } from '../../../Lateral/DTOs';
import { UserService } from '../../../Lateral/UserService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
    
  ) { }
public currentUser: CurrentUser = new CurrentUser('','','',null);
  


  ngOnInit(): void {

   
    console.log('current 1user: '+this.currentUser);
    console.log('ppp');
    this.userService.getCurrentUser().subscribe(res => (
      this.currentUser = res
    )
    );
    console.log('current 2user: '+JSON.stringify( this.currentUser));

    
  }


}
