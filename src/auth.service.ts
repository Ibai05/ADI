import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  private apiUrl = 'https://adiapp.duckdns.org/auth';

  constructor(private http: HttpClient) {}

  
  login(username: string, password: string): Observable<{ token: string }> {
    const payload = { username, password }; // Cambia "email" por "username" en el payload
    return this.http.post<{ token: string }>(this.apiUrl, payload).pipe(
        map((response) => {
            if (response.token) {
                localStorage.setItem('jwt', response.token); // Guarda el token en localStorage
            }
            return response;
        }),
        catchError((error) => this.handleError(error))
    );
}





  // Interceptor para añadir el token a cada petición
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has('skip-auth')) {
      request = request.clone({
        headers: request.headers.delete('skip-auth'),
      });
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => event),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
    } else {
      const token = localStorage.getItem('jwt');
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authRequest).pipe(
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
    }
  }

  // Manejo de errores en el interceptor y en el login
  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    return throwError(() => error);
  }

  // Verificación de autenticación
  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
