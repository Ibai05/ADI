import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  // Definir las galerías con sus nombres, descripciones, miniaturas y fotos.
  galleries = [
    {
      name: 'Galería de Bilbao',
      description: 'Explora nuestra tienda en Bilbao con esta colección de fotos.',
      thumbnail: 'assets/img/almi.jpeg',
      images: [
        'assets/img/almi.jpeg',
        'assets/img/almi1.jpg',
        'assets/img/almi2.jpg',
      ],
    },
    {
      name: 'Galería de Málaga',
      description: 'Descubre nuestro espacio en Málaga y sus productos destacados.',
      thumbnail: 'assets/img/almi3.jpg',
      images: [
        'assets/img/almi3.jpg',
        'assets/img/almi4.jpg',
        'assets/img/malaga3.jpg',
      ],
    },
    {
      name: 'Galería de Barcelona',
      description: 'Conoce nuestra tienda en Barcelona a través de estas fotos.',
      thumbnail: 'assets/img/barcelona_thumb.jpg',
      images: [
        'assets/img/barcelona1.jpg',
        'assets/img/barcelona2.jpg',
        'assets/img/barcelona3.jpg',
      ],
    },
    {
      name: 'Galería de Madrid',
      description: 'Una muestra de nuestra tienda en Madrid y sus productos.',
      thumbnail: 'assets/img/madrid_thumb.jpg',
      images: [
        'assets/img/madrid1.jpg',
        'assets/img/madrid2.jpg',
        'assets/img/madrid3.jpg',
      ],
    },
  ];

  currentImages: string[] = [];
  currentIndex: number = 0;
  isCarouselOpen: boolean = false;

  // Abre el carrusel con las imágenes seleccionadas
  openCarousel(images: string[]) {
    this.currentImages = images;
    this.currentIndex = 0;
    this.isCarouselOpen = true;
  }

  // Cierra el carrusel
  closeCarousel() {
    this.isCarouselOpen = false;
  }

  // Función para pasar a la imagen anterior
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.currentImages.length - 1;
    }
  }

  // Función para pasar a la imagen siguiente
  nextImage() {
    if (this.currentIndex < this.currentImages.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
  