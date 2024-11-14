import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('jwt');

    // Verificar si el token está próximo a expirar y renovarlo si es necesario
    if (token && this.authService.isTokenExpiringSoon()) {
      return this.authService.refreshToken().pipe(
        switchMap((newToken: string) => {
          // Almacena el nuevo token y clona la solicitud con el encabezado actualizado
          localStorage.setItem('jwt', newToken);
          const authRequest = request.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
          return next.handle(authRequest);
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error('Error al renovar el token. Por favor, inicie sesión nuevamente.'));
        })
      );
    }

    // Clonar la solicitud con el encabezado de autorización si hay un token disponible
    const authRequest = token ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : request;

    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud HTTP:', error);
        let errorMessage = 'Ocurrió un error inesperado.';
        if (error.status === 401) {
          errorMessage = 'No autorizado. Por favor, inicie sesión de nuevo.';
          // Redirigir al usuario a la página de inicio de sesión si es necesario
          // Por ejemplo: this.router.navigate(['/login']); (se necesita Router inyectado)
        } else if (error.status === 404) {
          errorMessage = 'Recurso no encontrado.';
        } else if (error.status === 500) {
          errorMessage = 'Error interno del servidor. Intente más tarde.';
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
