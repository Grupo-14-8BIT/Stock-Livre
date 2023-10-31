import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8081/api/v1/admin/login';
  http = inject(HttpClient);

  constructor() {}

  public fetch(): Observable<Login[]>{
    return this.http.get<Login[]>(this.API+'/fetch');
  }

}
