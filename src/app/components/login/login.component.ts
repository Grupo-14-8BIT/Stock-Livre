import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() login: Login = new Login();
  @Output() retorno = new EventEmitter<Login>();

  ngOnInit(): void {
  }
  roteador = inject(Router);
  logar() {
    // Check if the email and password input fields are empty
    if (!this.login.email || !this.login.senha) {
      alert('E-mail e senha são obrigatórios!');
      return;
    }

    // Navigate to the home page if the email and password are correct
    if (this.login.email == 'as' && this.login.senha == 'ds') {
      this.roteador.navigate(['/home']);
    } else {
      alert('Login ou senha incorretos!');
    }
  }
}