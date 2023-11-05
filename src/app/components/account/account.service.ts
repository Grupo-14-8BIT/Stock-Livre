import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseURL = 'http://localhost:8082/api/v1/admin/conta';

    constructor(private httpClient: HttpClient) { }
    
    getAllAccounts() {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTY1NkBnbWFpbC5jb20iLCJpYXQiOjE2OTkxMzc4MzgsImV4cCI6MTY5OTIyNDIzOH0.E-FSENQz-aiBWA3hKob-rCygY0Lt2HLml8689UvcE_E';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log({ headers: headers });
        
        return this.httpClient.get(`${this.baseURL}/getAll`, { headers: headers });
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
