// src/app/services/reparacion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {
  private productosUrl = `${environment.apiUrl}/admin/productos/nombres-ids-tipos-consolas-smartphones`;
  private reparacionUrl = `${environment.apiUrl}api/reparacion/nueva`; // Ajuste de la URL para evitar la doble barra

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.productosUrl);
  }

  crearReparacion(reparacionData: any): Observable<any> {
    console.log("Datos enviados:", reparacionData);
    return this.http.post(this.reparacionUrl, reparacionData);
  }
}
