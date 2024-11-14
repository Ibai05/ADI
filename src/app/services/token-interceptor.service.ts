import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Intentar obtener el token del almacenamiento local
    const token = localStorage.getItem('jwt');

    // Clonar la solicitud para agregar el encabezado de autorización solo si el token existe
    const authRequest = token
      ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      : request;

    // Manejar la solicitud y capturar errores
    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud HTTP:', error);
        // Personalizar el manejo del error según el tipo de error
        let errorMessage = 'Ocurrió un error inesperado.';
        if (error.status === 401) {
          errorMessage = 'No autorizado. Por favor, inicie sesión de nuevo.';
          // Aquí podrías redirigir al usuario a la página de inicio de sesión si es necesario
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
