import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Sku } from './sku';
import { Observable } from 'rxjs';
import eventService from 'src/app/event.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  API: string = 'http://localhost:8082/api/v1/admin/sku';
  http = inject(HttpClient);

  constructor() {}



  fetch(){
    let token='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTRAZ21haWwuY29tIiwiaWF0IjoxNjk5MjQwOTQyLCJleHAiOjE2OTkzMjczNDJ9.ClI41A0XnndahzElrmiRt7um37HFFq7u7mtw5h4_5Cg'
    let head_obj = new HttpHeaders().set("Authorization","bearer"+token)

    return this.http.get<Sku[]>(this.API + '/fetch', {headers:head_obj});
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
