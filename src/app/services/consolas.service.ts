import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

  private apiUrl = 'https://adiapp.duckdns.org/admin/productos/consolas';

  constructor(private http: HttpClient) { }

  getConsolas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
