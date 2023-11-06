import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Sku } from './sku';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  API: string = 'http://localhost:8082/api/v1/admin/sku';
  http = inject(HttpClient);



  constructor(private cookieService: CookieService) {}


  token: string = this.cookieService.get("JWT");

  private getStandardOptions(): any {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
}

  fetch(){
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
    console.log("OKIDOKI0");

    return this.http.get<Sku[]>(this.API + '/fetch', options);

  }

  getAll(): Observable<Sku[]> {
    console.log("OKIDOKI1");
    return this.http.get<Sku[]>(this.API + '/getAll');
  }

  mudarSkuAnuncio(): Observable<Sku[]> {
    console.log("OKIDOKI2");
    return this.http.get<Sku[]>(this.API + '/change');
  }

  update(sku: Sku): Observable<Sku> {
    console.log("OKIDOKI3");
    return this.http.put<Sku>(this.API + '/update?sku=' + [sku], sku);
  }

}