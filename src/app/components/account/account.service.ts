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
    token: string = this.cookieService.get("JWT");

    constructor(private httpClient: HttpClient, private cookieService: CookieService) {}

    private getStandardOptions(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }

getAllAccounts() :any {

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

getAccountById(id: number) {
    return this.httpClient.get(`${this.baseURL}/conta/${id}`);
}

autorizaAccount(): Observable<any> {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`);
    // Note: 'as any'    cast is required to avoid TypeScript compile errors
    options.responseType = 'text' as 'json'; // Set responseType to 'text' as 'json'
  
    // Use a GET request and pass the modified options, cast options as 'any'
    return this.httpClient.get<string>(`${this.baseURL}/autoriza`, options as any);
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
}
// function CrossOrigin(): (target: AccountService, propertyKey: "getAllAccounts", descriptor: TypedPropertyDescriptor<() => any>) => void | TypedPropertyDescriptor<() => any> {
//     throw new Error('Function not implemented.');
// }

