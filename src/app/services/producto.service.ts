import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://adiapp.duckdns.org/admin/productos/videojuegos';

  constructor(private http: HttpClient) { }

  getVideojuegos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
