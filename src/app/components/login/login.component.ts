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
    if (this.login.email == 'admin' && this.login.senha == 'admin')
      this.roteador.navigate(['admin/stock']);
    else
      alert('Login ou senha incorretos!');
  }
}