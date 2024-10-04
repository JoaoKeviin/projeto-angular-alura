import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { estados } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {
  private apiUrl: string = environment.apiUrl

  private cache$?: Observable<estados[]>;

  constructor(
    private http: HttpClient
  ) { 
  }

  list() : Observable<estados[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<estados[]> {
    return this.http.get<estados[]>(`${this.apiUrl}/estados`);
  }

}
