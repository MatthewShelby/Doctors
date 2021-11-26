import { Component, OnInit,  } from '@angular/core';
//import { Observer, Subscriber } from 'rxjs';

// import { DataService } from 'src/app/services/data-ser.service';

import { NumberService } from '../number-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public showNum!: string;
  public intext: string = '';


  //txtMessage: string = '';
  //uniqueID: string = new Date().getTime().toString();
  // messages = new Array<Message>();  
  // message = new Message();  
  
  constructor(
    private numberSer: NumberService,
  ) {
    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {

    this.numberSer.numberReceived.subscribe((num: number) => {

      let d: Date = new Date();
      this.showNum = num.toString() + ' - ' + d.getSeconds() + '  ' + d.getMilliseconds();

      // this._ngZone.run(() => {  
      //   if (num.clientuniqueid !== this.uniqueID) {  
      //     message.type = "received";  
      //     this.messages.push(message);  
      //   }  
      // });  

    });
  }

  // constructor(
  //   private data: DataService,

  // ) { }

  ngOnInit(): void {

    // this.numberSer.numChanged.subscribe(res => {
    //   this.showNum = res;
    // });

    // this.data.numChanged.subscribe(res => {
    //   this.showNum = res;
    // })

  }
  onSend() {
    let d: Date = new Date();

    this.numberSer.sendMessage(this.intext + '  ' + d.getSeconds() + '  ' + d.getMilliseconds());
  }
}
