import { HttpClient } from '@angular/common/http';
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
  public saveSingUp(singup: SingUp): any {
    let register = this.http.post(this.API, singup).subscribe().;
    const saboresObservable = register
    .pipe(
      map((buffer: ArrayBuffer) => {
        // Decode the ArrayBuffer into a string
        const decoder = new TextDecoder();
        const string = decoder.decode(buffer);
  
        // Parse the JSON string into a SingUp object
        const parsedSingUp = JSON.parse(string);
  
        // Return the parsed SingUp object
        return parsedSingUp;
      })
    );
  }
}
