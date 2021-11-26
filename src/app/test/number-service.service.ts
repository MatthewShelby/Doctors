import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
// import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})

export class NumberService {

  numberReceived = new EventEmitter<number>();
  numToFollow = new EventEmitter<number>();
  connectionEstablished = new EventEmitter<Boolean>();

  numChanged = new Subject<number>();


  private connectionIsEstablished = false;

  private _hubConnection!: HubConnection;

  public numRes: number = 0;
  private loginToken: string = ''

  constructor(
    private cookie: CookieService
  ) {

    try {

      
            this.createConnection();
            this.registerOnServerEvents();
            this.startConnection();
            this.SetCookie();
      

    } catch (error) {
      console.log('Error catched in constrctor: ' + error);

    }

  }

  SetCookie() {
    try {
      this.loginToken = this.cookie.get('CU');

    } catch (error) {
      console.log('Error catched in set cookie: ' + error);

    }
  }


  tickObservable() {
    console.log('tickObservable###');

    return this.numChanged.asObservable();
  }
  sendMessage(message: string) {
    this._hubConnection.invoke('NewMessage', message);
  }
  sendNumber(num: number) {
    console.log('sendNumber  num: ' + num)
    this._hubConnection.invoke('GetNumber', num);
  }

  // GetNumber:<number>() {

  //   console.log('GetNumber  num: ' + num)
  //   this._hubConnection.invoke('NewNumber', num);

  // }

  private createConnection() {

    try {



      this._hubConnection = new HubConnectionBuilder()
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .withUrl('https://www.qweq.ir/numhub', {
          accessTokenFactory: () => this.loginToken,
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
        //.withUrl('https://www.qweq.ir/numhub',{withCredentials: true})
        //.withUrl('https://localhost:44339/numhub', { accessTokenFactory: () => this.loginToken })
        .build();
      console.log('connection build')
    } catch (error) {
      console.log('Error catched in Build: ' + error);

    }

  }

  private startConnection(): void {

    ;
    console.log('connection baseUrl: ' + this._hubConnection.baseUrl)
    try {
      this._hubConnection
        .start()
        .then(() => {
          this.connectionIsEstablished = true;
          console.log('Hub connection started');
          this.connectionEstablished.emit(true);
        })
        .catch(() => {

          console.log('Error while establishing connection, retrying...')
        }
          //   err => {  
          //   console.log('Error while establishing connection, retrying...'+err);  
          //   // setTimeout(function () { this.startConnection(); }, 5000);  
          // }

        );
    } catch (error) {
      console.log('Error catched in establishing: ' + error);
    }

  }

  private registerOnServerEvents(): void {
    console.log('registerOnServerEvents')

    this._hubConnection.on('MessageReceived', (data: any) => {
      this.numberReceived.emit(data);
      this.numChanged.next(data);
    });
  }
}
