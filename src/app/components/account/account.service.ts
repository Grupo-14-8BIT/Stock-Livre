import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private baseURL = '';

    constructor(private httpClient: HttpClient) { }

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
