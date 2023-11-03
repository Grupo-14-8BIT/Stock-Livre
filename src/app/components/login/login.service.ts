import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8081/api/v1/auth/authenticate';
  http = inject(HttpClient);

  constructor() {}

  public fetch(email: string, password: string): Observable<Login> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.post<Login>(this.API, params);
  }

}
