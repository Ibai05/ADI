import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Manejar respuesta exitosa y redirigir al usuario
        this.navCtrl.navigateRoot('/tabs');
      },
      error => {
        // Manejar error de autenticación
        console.error('Error de autenticación', error);
      }
    );
  }
}
