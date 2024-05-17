import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login, LoginResponse } from './login';
import { Observable, map } from 'rxjs';
import { SingUp } from '../sing-up/sing-up';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  API: string = 'https://192.168.56.103:443/api/v1/auth/authenticate';
  http = inject(HttpClient);

  constructor() {}

  
  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  async fetch(email: string, password: string): Promise<Observable<any>> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    const params = {email : email, password : password};
    let login = await this.http.post(this.API, JSON.stringify(params), options);

    return login;
  }
}

  // public async validateLogin(email: string, password: string): Promise<boolean> {
  //   const loginResponse: LoginResponse = await this.fetch(email, password) as LoginResponse;

  //   // Check if the login is valid
  //   if (loginResponse.id && loginResponse.email && loginResponse.senha) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }




