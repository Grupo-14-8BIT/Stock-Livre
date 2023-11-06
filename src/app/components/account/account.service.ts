import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import eventService from 'src/app/event.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Account } from './account';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseURL = "http://localhost:8082/api/v1/admin/conta";

    constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

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

getAllAccounts(): Observable<any> {
    const options = this.getStandardOptions();
    return this.httpClient.get<Account[]>(`${this.baseURL}/getAll`, options)
        .pipe(
        catchError(this.handleError)
        );
}

getAccountById(id: number) {
    return this.httpClient.get(`${this.baseURL}/conta/${id}`);
}

createAccount(accountData: any) {
    return this.httpClient.post(`${this.baseURL}/conta`, accountData);
}

updateAccount(id: number, accountData: any) {
    return this.httpClient.put(`${this.baseURL}/conta/${id}`, accountData);
}

deleteAccount(id: number) {
    return this.httpClient.delete(`${this.baseURL}/conta/${id}`);
}

handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
}
}

function CrossOrigin(): (target: AccountService, propertyKey: "getAllAccounts", descriptor: TypedPropertyDescriptor<() => any>) => void | TypedPropertyDescriptor<() => any> {
    throw new Error('Function not implemented.');
}
