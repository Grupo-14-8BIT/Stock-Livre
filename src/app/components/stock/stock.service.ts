import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = 'http://localhost:8082/api/v1/admin/estoque';

  constructor(private httpClient: HttpClient, private cookieService : CookieService) { }

  token!: string;

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  getAllStock() :any {

    this.token =  this.cookieService.get("JWT");

    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
   


    return this.httpClient.get(`${this.baseURL}/getall`,options);
  }

  getStockById(id: number) {
    return this.httpClient.get(`${this.baseURL}/stock/${id}`);
  }

  async addNewStock(newStock: Stock, token: string): Promise<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    await this.httpClient.post(`${this.baseURL}/stock`, newStock, { headers: headers });
  }

  updateStock(id: number, stockData: any) {
    return this.httpClient.put(`${this.baseURL}/stock/${id}`, stockData);
  }

  deleteStock(id: number) {
    return this.httpClient.delete(`${this.baseURL}/stock/${id}`);
  }
}
