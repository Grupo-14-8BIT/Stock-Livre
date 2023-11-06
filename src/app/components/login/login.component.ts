import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import eventService from 'src/app/event.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() login: Login = new Login();
  @Output() retorno = new EventEmitter<Login>();

  public roteador: Router;
  loginService: LoginService;

  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.roteador = router;
  }

  async logar() {
    if (!this.login.email || !this.login.senha) {
      alert('E-mail e senha são obrigatórios!');
      return;
    }
  
    // // Validate the email
    // this.login.emailExists = await this.loginService.validateEmail(this.login.email);
  
    if (this.login.emailExists) {
      console.log("ta funcionando disgraca");
      
      // The email exists in the backend
      (await this.loginService.fetch(this.login.email, this.login.senha)).subscribe(data => {
        eventService.emit("usuario Logou", JSON.stringify(data));
      });
    } else {
      // The email does not exist in the backend
      alert('E-mail não existe!');
    }
  }
      

}
