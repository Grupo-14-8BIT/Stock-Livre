import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { CookieService } from 'ngx-cookie-service';
import { componenteStock } from './stock-show/componenteStock';

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
 

  showStock(id:number) :any {

    this.token =  this.cookieService.get("JWT");

    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
   


    return this.httpClient.get(`${this.baseURL}/show?id=${id}`,options);
  }


   addNewStock(newStock: any): any {
    this.token =  this.cookieService.get("JWT");

    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
   



    return this.httpClient.post(`${this.baseURL}/criar`,JSON.stringify(newStock) , options);
  }

  updateStock(id: number, stockData: any) {
    let option = this.getStandardOptions();
    console.log(stockData);
    
    option.headers = option.headers.set('Authorization', `Bearer ${this.token}`)
    return this.httpClient.put(`${this.baseURL}/updateContent${id}`, stockData, option);
  }

  deleteStock(id: number): any {
    let options = this.getStandardOptions();
    
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

    console.log("delete-token:\t" + this.token);

    console.log(options);

    return this.httpClient.delete(`${this.baseURL}/deletecontent?id=${id}`,options);
  }


  createStockContent(addContent: any): any {
    
    this.token = this.cookieService.get("JWT");

    let options = this.getStandardOptions();

    console.log(this.token);

    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

    return this.httpClient.post(`${this.baseURL }/addContent`, addContent,  options);
}



updateQuantidade(id: number, update: any): any {
  

    
  this.token = this.cookieService.get("JWT");

  let options = this.getStandardOptions();

  console.log(this.token);

  options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)


  return this.httpClient.put(`${this.baseURL }/updateContent?id=${id}`, update, options);


}


}