import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://35.92.45.176:8082/token/';

  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  fetch(username: string, password: string): Observable<any> {
    const body = {
      clientId: 'stock_client',
      password: password,
      grantType: 'password',
      username: username,
      secret: 'cSMCp85UD55BWUCo2GDlMFjbqiFT795f'
    };

    return this.http.post<any>(this.API, body, this.getStandardOptions());
  }
}
