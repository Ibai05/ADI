import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, catchError, map, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://adiapp.duckdns.org/auth';
  //private apiUrl = 'https://apirestadiprueba.duckdns.org/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    const payload = { email, password }; // Ensure these keys match API expectations.
    return this.http.post<{ token: string }>(this.apiUrl, payload);
  }


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
      const newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(newRequest).pipe(
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Interceptor error:', error);
    return throwError(error);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
