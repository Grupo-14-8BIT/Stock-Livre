import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sku } from './sku';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  API: string = 'http://localhost:8082/api/v1/admin/sku';
  http = inject(HttpClient);

  constructor() {}

  public fetch(): Observable<Sku[]>{
    return this.http.get<Sku[]>(this.API+'/fetch');
  }
  public mudarSkuAnuncio(): Observable<Sku[]>{
    return this.http.get<Sku[]>(this.API+'/change');
  }
  public update(id:number, sku:Sku): Observable<Sku>{
    return this.http.put<Sku>(this.API+'/update?id='+ [id] ,sku);
  }

}
