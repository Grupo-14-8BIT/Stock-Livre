import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Sku } from './sku';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  API: string = 'http://192.168.56.101:8082/api/v1/admin/sku';
  // API: string = 'http://localhost:8082/api/v1/admin/sku';
  http = inject(HttpClient);

  constructor( private cookieService: CookieService) {}

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
  

  fetch(){
    let options = this.getStandardOptions();

    console.log("getAllAccount:\t" + this.token);

    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

    return this.http.get<Sku[]>(this.API + '/fetch', options);
  }

  getAll():any{
    console.log("OKIDOKI1");
    let option = this.getStandardOptions();

    console.log("getAllAccount:\t" + this.token);

    option.headers = option.headers.set('Authorization', `Bearer ${this.token}`)

    return this.http.get(this.API + '/getAll', option);
  }

  mudarSkuAnuncio(): Observable<Sku[]> {
    console.log("OKIDOKI2");
    return this.http.get<Sku[]>(this.API + '/change');
  }

  update(sku: Sku, skuAntigo : String): any{
    console.log(sku);
    console.log("OKIDOKI3");
    console.log("update service",skuAntigo)
    let option = this.getStandardOptions();
 
    console.log("getAllAccount:\t" + this.token);
 
    option.headers = option.headers.set('Authorization', `Bearer ${this.token}`)
    return this.http.put(this.API + '/update?sku=' + skuAntigo , sku , option);
  }
 
}