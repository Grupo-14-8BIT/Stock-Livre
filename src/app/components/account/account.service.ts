import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseURL = 'http://localhost:8082/api/v1/admin/conta';

    constructor(private httpClient: HttpClient) { }
    
    getAllAccounts() {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTM0NUBnbWFpbC5jb20iLCJpYXQiOjE2OTkxMjA5MjQsImV4cCI6MTY5OTIwNzMyNH0.Y3aZvT6D-D2hC9OGCzvfRH8AmDrsaPDEpA_KXRlQWJs';
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
