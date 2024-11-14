import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

  private apiUrl = `${environment.apiUrl}/admin/productos/consolas`;

  constructor(private http: HttpClient) { }

  getConsolas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
