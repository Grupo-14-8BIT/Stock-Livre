import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import eventService from 'src/app/event.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseURL = 'http://localhost:8082/api/v1/admin/conta';

    token! : string;
    

    constructor(private httpClient: HttpClient) {

        
    eventService.listen("usuario Logou", (logou) => {
        
        this.token = logou;
  
  
      })
  

     }

    private getStandardOptions() : any {
        return {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };
      }
    
    
    getAllAccounts() {

        let options = this.getStandardOptions();

        // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTY1NkBnbWFpbC5jb20iLCJpYXQiOjE2OTkxMzc4MzgsImV4cCI6MTY5OTIyNDIzOH0.E-FSENQz-aiBWA3hKob-rCygY0Lt2HLml8689UvcE_E';
console.log(this.token);

        options.headers = options.headers.set( 'Authorization', this.token)

        // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);      
        return this.httpClient.get(`${this.baseURL}/getAll`, options);
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
}
