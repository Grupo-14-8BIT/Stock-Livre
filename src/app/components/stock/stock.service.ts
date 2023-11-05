import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = 'http://localhost:8082/api/v1/admin/stock';

    constructor(private httpClient: HttpClient) { }
    
    getAllStock() {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTM0NUBnbWFpbC5jb20iLCJpYXQiOjE2OTkxMjA5MjQsImV4cCI6MTY5OTIwNzMyNH0.Y3aZvT6D-D2hC9OGCzvfRH8AmDrsaPDEpA_KXRlQWJs';
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log({ headers: headers });
        
        return this.httpClient.get(`${this.baseURL}/getAll`, { headers: headers });
    }
    
    getStockById(id: number) {
        return this.httpClient.get(`${this.baseURL}/stock/${id}`);
    }

    createStock(stockData: any) {
        return this.httpClient.post(`${this.baseURL}/stock`, stockData);
    }

    updateStock(id: number, stockData: any) {
        return this.httpClient.put(`${this.baseURL}/stock/${id}`, stockData);
    }

    deleteStock(id: number) {
        return this.httpClient.delete(`${this.baseURL}/stock/${id}`);
    }
}
