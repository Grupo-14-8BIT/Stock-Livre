import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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

  logar() {
    if (!this.login.email || !this.login.senha) {
      alert('E-mail e senha são obrigatórios!');
      return;
    }

    // Call the loginService.fetch() method to authenticate the user
    this.loginService.fetch(this.login.email as string, this.login.senha as string).subscribe((loginResponse: Login) => {
      // If the login was successful, navigate to the home page
      if (loginResponse) {
        // Make a request to the sing-up back end to validate the login
        this.loginService.validateLogin(loginResponse.email as string, loginResponse.senha as string).subscribe((isLoginValid: boolean) => {
          if (isLoginValid) {
            this.roteador.navigate(['/home']);
          } else {
            alert('Login ou senha incorretos!');
          }
        });
      } else {
        alert('Login ou senha incorretos!');
      }
    });
  }
}
