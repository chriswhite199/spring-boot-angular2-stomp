import {Component} from '@angular/core';
import {StompService} from 'ng2-stomp-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  connected = false;
  greetings = new Array<string>();
  subscription: Subscription = null;

  constructor(private stomp: StompService) {
    stomp.configure({host: '/stomp-websocket'});
  }

  connect() {
    this.stomp.startConnect().then(() => {
      this.connected = true;
      console.log('connected');

      // there appears to be a bug in stomp-service which means the promise is
      // resolved before the connection state is properly changed
      setTimeout(() => {
        console.log('subscribing');
        this.subscription =
          this.stomp.subscribe('/topic/greetings',
            (data) => this.greetings.push(data.content)
          );
      }, 500);
    });
  }

  disconnect() {
    this.subscription.unsubscribe();
    this.stomp.disconnect().then(() => {
      console.log('disconnected');
      this.connected = false
    });
  }

  sendName(name: string) {
    this.stomp.send('/app/hello', {'name': name});
  }
}
