import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Validación simple de campos vacíos
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (response: { token: string }) => {
        localStorage.setItem('jwt', response.token); // Guardar el token en localStorage
        this.router.navigate(['tabs/tab1']); // Redirigir a la página principal después del login
      },
      (error: any) => {
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
