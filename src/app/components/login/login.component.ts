import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() login: any = {};
  @Output() retorno = new EventEmitter<any>();

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieService.deleteAll();
  }

  async logar() {
    if (!this.login.username || !this.login.password) {
      alert('Usuário e senha são obrigatórios!');
      return;
    }

    const url = 'http://localhost:8082/token/';
    const body = {
      clientId: 'stock_client',
      password: this.login.password,
      grantType: 'password',
      username: this.login.username,
      secret: 'cSMCp85UD55BWUCo2GDlMFjbqiFT795f'
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.httpClient.post<any>(url, body, httpOptions).subscribe(
      data => {
        const accessToken = data.access_token;
        console.log('Token:', accessToken);

        this.cookieService.set('JWT', accessToken);
        this.router.navigate(['/account']);
      },
      error => {
        console.error('Erro:', error);
        alert('Falha no login. Verifique suas credenciais.');
      }
    );
  }
}
