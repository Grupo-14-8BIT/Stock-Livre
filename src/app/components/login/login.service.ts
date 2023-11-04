import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login, LoginResponse } from './login';
import { Observable } from 'rxjs';
import { SingUp } from '../sing-up/sing-up';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8081/api/v1/auth/authenticate';
  http = inject(HttpClient);

  constructor() {}

  public async fetch(email: string, password: string): Promise<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return await this.http.post(this.API, params).toPromise();
  }

  public async validateLogin(email: string, password: string): Promise<boolean> {
    const loginResponse: LoginResponse = await this.fetch(email, password) as LoginResponse;

    // Check if the login is valid
    if (loginResponse.id && loginResponse.email && loginResponse.senha) {
      return true;
    } else {
      return false;
    }
  }

}
