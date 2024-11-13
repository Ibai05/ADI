import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  direccion: string = '';
  password: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router // Inyecta el Router aquí
  ) {}

  onRegister() {
    const userData = {
      email: this.email,
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      direccion: this.direccion,
      password: this.password,
    };

    this.registerService.registerUser(userData).subscribe({
      next: (response) => {
        console.log('Registro exitoso, token:', response.token);
        // Aquí se redirige correctamente
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
      },
    });
  }
}
