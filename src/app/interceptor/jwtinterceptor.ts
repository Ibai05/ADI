import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://adiapp.duckdns.org/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    const payload = { email, password };
    return this.http.post<{ token: string }>(this.apiUrl, payload).pipe(
      tap(response => {
        // Guarda el token en localStorage
        localStorage.setItem('jwt', response.token);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la autenticación:', error);
    return throwError(() => new Error('Error en la autenticación'));
  }
}
