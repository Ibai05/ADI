import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Cambiado de "email" a "username" para alinearse con el backend.
  password: string = '';
  errorMessage: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Validación simple de campos vacíos
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      (response: { token: string }) => {
        localStorage.setItem('jwt', response.token); // Guardar el token en localStorage
        console.log('Token received:', response.token); // Mostrar el token en la consola

        // Cambiar la redirección a una ruta que esté definida en tu aplicación
        this.router.navigate(['/tabs/tab1']); // Asegúrate de que "/home" esté definido en las rutas
      },
      (error: any) => {
        // Manejar el error de login
        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
        console.error('Login error:', error);
      }
    );
  }
}
