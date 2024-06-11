import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import eventService from 'src/app/event.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Account } from './account';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseURL = "http://192.168.56.101:8082/api/v1/admin/conta";
    // private baseURL = "http://localhost:8082/api/v1/admin/conta";

    constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router) { }

    token: string = this.cookieService.get("JWT");

    private getStandardOptions(): any {
        const token = this.cookieService.get("JWT");
        console.log(token);
        
        if (!token) {
          throw new Error('JWT token not found in cookies');
        }
    
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
    
        return { headers };
      }


getAllAccounts() :any {
    this.token = this.cookieService.get("JWT");

    let options = this.getStandardOptions();

    console.log(this.token);

    

    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)



    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);      
    return this.httpClient.get(`${this.baseURL}/getAll`, options);

    //    const contasObservable = contas
    //    .pipe(
    //      map((buffer: ArrayBuffer) => JSON.parse(JSON.stringify(buffer)))
    //    );

    //    return contasObservable;

}



createAccount() : any {

    this.token = this.cookieService.get("JWT");

    let options = this.getStandardOptions();

    console.log(this.token);

    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)



    return this.httpClient.get(`${this.baseURL}/autoriza`, options);
}



deleteAccount(id: number) {

    let options = this.getStandardOptions();
    
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

    console.log(this.token);

    console.log(options);

    return this.httpClient.delete(`${this.baseURL}/Delete?conta_id=${id}`,options);
}

// handleError(error: HttpErrorResponse) {
//     // Handle the HTTP error here
//     console.error('An error occurred:', error.error);
//     return throwError(() => new Error('Something bad happened; please try again later.'));
// }
}

