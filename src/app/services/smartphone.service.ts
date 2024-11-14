import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class SmartphoneService {
  private apiUrl = `${environment.apiUrl}/admin/productos/smartphones`;
  constructor(private http: HttpClient) {}

  // Método para obtener los smartphones
  getSmartphones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
