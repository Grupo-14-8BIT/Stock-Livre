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

    eventService.listen("usuario Logou", (logou) => {

      console.log("Usuario logou : " + logou)
      // token = acess token 


    })

  }



}