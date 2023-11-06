import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  setToken(newToken: string): void {
    this.tokenSubject.next(newToken); 
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }
  
}
