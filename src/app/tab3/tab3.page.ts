import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  
  imagenes: string[] = [
    'assets/img/almi1.png',
    'assets/img/almi2.jpg',
    'assets/img/almi3.jpg',
    'assets/img/almi4.jpg',
    'assets/img/almi5.jpg',
    'assets/img/almi6.jpeg',
  ];

  // Índice de la imagen que se está mostrando
  currentIndex: number = 0;

  // Función para pasar a la imagen anterior
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imagenes.length - 1; // Regresar a la última imagen
    }
  }

  // Función para pasar a la imagen siguiente
  nextImage() {
    if (this.currentIndex < this.imagenes.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volver a la primera imagen
    }
  }
}
