import { Component, OnInit } from '@angular/core';
import { HubService } from '../hub.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  public static: string = '';
  public sendText: string = '';
  public showNum: string = '';

  constructor(
    private hubb: HubService
  ) { }

  ngOnInit(): void {
    this.static = 'Hello static Variable';
    this.subscribeToEvents();
  }

  onSend() {
    let d: Date = new Date();
    this.hubb.sendMessage(this.sendText + '  ' + d.getSeconds() + '  ' + d.getMilliseconds());
  }

  private subscribeToEvents(): void {

    this.hubb.numberReceived.subscribe((num: number) => {
      let d: Date = new Date();
      this.showNum = num.toString() + ' - ' + d.getSeconds() + '  ' + d.getMilliseconds();
    });
  }
}
