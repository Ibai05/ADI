import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneService {
  private apiUrl = 'https://adiapp.duckdns.org/admin/productos/smartphones'; 

  constructor(private http: HttpClient) {}

  // Método para obtener los smartphones
  getSmartphones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
