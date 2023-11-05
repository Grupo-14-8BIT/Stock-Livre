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

    // Call the loginService.fetch() method to authenticate the user
    (await this.loginService.fetch(this.login.email, this.login.senha)).subscribe( data => { 

      if ( data == Error) {

        alert("Usuario nao existe")
      } else {


        eventService.emit("usuario Logou", JSON.stringify(data) )

      }
      
let teste = JSON.stringify(data);
      console.log(teste)})

  //   // Make a request to the sing-up back end to validate the login
  //   const isLoginValid = await this.loginService.validateLogin(loginResponse.email as string, loginResponse.senha as string);

  //   if (isLoginValid) {
  //     this.retorno.emit(loginResponse);
  //   } else {
  //     alert('Login ou senha incorretos!');
  //   }
  }
}
