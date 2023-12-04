import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SignUp } from './sign-up';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  API: string = 'http://localhost:8082/api/v1/auth/register';
  http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public fetch(): Observable<SignUp[]>{
    return this.http.get<SignUp[]>(this.API+'/fetch');
  }
  public saveSingUp(singup: SignUp) {
    return this.http.post(this.API, singup);
  }
  
}
