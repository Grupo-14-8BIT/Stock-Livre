import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignUp } from './sign-up';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Input() signup: SignUp = new SignUp();
  @Output() retorno = new EventEmitter<SignUp>();

  constructor(private router: Router, private singUpService: SignUpService) {}

  onSubmit() {
    if (this.signup.firstname && this.signup.lastname && this.signup.email && this.signup.password) {
      // Send the registered data to the backend
      this.singUpService.saveSingUp(this.signup).subscribe(() => {
        // Once the data has been saved, redirect to the login page
        this.router.navigate(['/login']);
      });
    }
  }

  saveSingUp() {
    // Call the saveSingUp() method from the SingUpService
    this.singUpService.saveSingUp(this.signup).subscribe(() => {
      // Once the data has been saved, redirect to the login page
      this.router.navigate(['/login']);
    });
  }

}
