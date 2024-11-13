  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { environment } from '../environments/environment';

  @Injectable({
    providedIn: 'root',
  })
  export class ProductoService {
    private apiUrl = `${environment.apiUrl}admin/producto`;

    constructor(private http: HttpClient) {}

    getProductoById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
  }
