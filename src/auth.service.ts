import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://adiapp.duckdns.org/auth'; // Ruta para login
  private refreshUrl = 'https://adiapp.duckdns.org/refresh'; // Ruta para refresh token

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(username: string, password: string): Observable<{ token: string }> {
    const payload = { username, password };
    return this.http.post<{ token: string }>(this.apiUrl, payload).pipe(
      map((response) => {
        if (response.token) {
          localStorage.setItem('jwt', response.token);
        }
        return response;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  // Método para renovar el token
  refreshToken(): Observable<string> {
    return this.http.post<{ token: string }>(this.refreshUrl, {}).pipe(
      map((response) => {
        const newToken = response.token;
        if (newToken) {
          localStorage.setItem('jwt', newToken); // Actualiza el token en localStorage
        }
        return newToken;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  // Verificar si el token está cerca de expirar (por ejemplo, en menos de 5 minutos)
  isTokenExpiringSoon(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      const expirationTime = decoded.exp * 1000; // Convertir a milisegundos
      const currentTime = Date.now();
      const timeRemaining = expirationTime - currentTime;
      return timeRemaining < 5 * 60 * 1000; // Menos de 5 minutos
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('jwt');
  }

  // Verificación de autenticación
  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en HTTP:', error);
    return throwError(() => new Error(error.message || 'Error en la solicitud, por favor intenta más tarde.'));
  }

  // Obtener el token desde el almacenamiento local
  getToken(): string | null {
    return localStorage.getItem('jwt');
  }
}
