import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Lateral/UserService';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private userService: UserService) { }
  userSignedIn = false;
  ngOnInit(): void {
    this.userService.isUserLogin().subscribe(res => (
      this.userSignedIn = res
    ))
  }

}
