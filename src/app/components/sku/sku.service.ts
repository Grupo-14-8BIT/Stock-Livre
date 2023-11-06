import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Sku } from './sku';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  API: string = 'http://localhost:8082/api/v1/admin/sku';
  http = inject(HttpClient);

  constructor() {}

  fetch(){

    let token='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTRAZ21haWwuY29tIiwiaWF0IjoxNjk5MjQ1NzQ1LCJleHAiOjE2OTkzMzIxNDV9.6MUYmHkSrcjPjn15-b1LtxVkifoQ9WecRVKk5FQuGuM'
    let head_obj = new HttpHeaders().set("Authorization","bearer"+token)
    console.log("OKIDOKI0");

    return this.http.get<Sku[]>(this.API + '/fetch', {headers : head_obj});

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
