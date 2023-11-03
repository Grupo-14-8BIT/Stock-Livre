import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingUp } from '../sing-up/sing-up';
import { Router } from '@angular/router';
import { SingUpService } from '../sing-up/sing-up.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {
  @Input() singup: SingUp = new SingUp();
  @Output() retorno = new EventEmitter<SingUp>();

  constructor(private router: Router, private singUpService: SingUpService) {}

  onSubmit() {
    if (this.singup.firstname && this.singup.lastname && this.singup.email && this.singup.password) {
      console.log(this.singup);
      console.log("onsubmit chamada funcionando");
      // Send the registered data to the backend
      this.singUpService.saveSingUp(this.singup).subscribe(() => {
        // Once the data has been saved, redirect to the login page
        this.router.navigate(['/login']);
      });
    }
  }


}
