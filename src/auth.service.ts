import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://adiapp.duckdns.org/auth'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(username: string, password: string): Observable<{ token: string }> {
    const payload = { username, password }; // Ajusta el payload según sea necesario
    return this.http.post<{ token: string }>(this.apiUrl, payload).pipe(
      map((response) => {
        if (response.token) {
          localStorage.setItem('jwt', response.token); // Guardar el token en localStorage
        }
        return response;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('jwt'); // Elimina el token al cerrar sesión
  }

  // Verificación de autenticación
  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt'); // Verifica si el token existe en localStorage
  }

  // Manejo de errores para login y otras peticiones
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error en HTTP:', error);
    return throwError(() => new Error(error.message || 'Error en la solicitud, por favor intenta más tarde.'));
  }

  // Método opcional para obtener el token desde el almacenamiento local
  getToken(): string | null {
    return localStorage.getItem('jwt'); // Obtiene el token del localStorage si existe
  }
}

