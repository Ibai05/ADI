import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = `${environment.apiUrl}/admin/productos/videojuegos`;
  constructor(private http: HttpClient) { }

  getVideojuegos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
