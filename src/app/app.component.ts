import { Component } from '@angular/core';
import eventService from './event.service';
import { eventListeners } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stock-Livre'
  token! : string;

  constructor() {
    eventService.listen("usuario Logou", (logou: string) => {  
      const logouObj = JSON.parse(logou);
  
      this.token = logouObj.access_token;
      console.log("Access Token set: ", this.token);
      console.log(this.token);
      
    });
  }
  
}
