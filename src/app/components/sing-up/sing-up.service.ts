import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingUp } from './sing-up';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  API: string = 'http://localhost:8081/api/v1/auth/register';
  http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public fetch(): Observable<SingUp[]>{
    return this.http.get<SingUp[]>(this.API+'/fetch');
  }
  public saveSingUp(singup: SingUp) {
    return this.http.post(this.API, singup);
  }
  
}

