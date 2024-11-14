import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  async login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }

    // Mostrar el indicador de carga mientras se procesa el inicio de sesión
    const loading = await this.loadingController.create({
      message: 'Logging in...',
    });
    await loading.present();

    this.authService.login(this.username, this.password).subscribe(
      (response: { token: string }) => {
        localStorage.setItem('jwt', response.token); // Guardar el token en localStorage
        console.log('Token received:', response.token);

        loading.dismiss(); // Cerrar el indicador de carga
        this.router.navigate(['/tabs/tab1']); // Redirigir al usuario
      },
      (error: any) => {
        loading.dismiss(); // Cerrar el indicador de carga en caso de error
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
