import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab1',
  templateUrl: './subtab1.page.html',
  styleUrls: ['./subtab1.page.scss'],
})
export class Subtab1Page implements OnInit {
  topProductos = [
    { nombre: 'Laptop Gaming', precio: 999.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'Teclado Mecánico', precio: 89.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Auriculares Pro', precio: 129.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Mouse RGB', precio: 49.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'Laptop Gaming', precio: 999.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'Teclado Mecánico', precio: 89.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Auriculares Pro', precio: 129.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Mouse RGB', precio: 49.99, imagen:'assets/img/residentevil.jpg' }

  ];

  productosRecomendados = [
    { nombre: 'Monitor UltraWide', precio: 299.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Smartwatch', precio: 199.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Cámara 4K', precio: 499.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'Monitor UltraWide', precio: 299.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Smartwatch', precio: 199.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Cámara 4K', precio: 499.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'Monitor UltraWide', precio: 299.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Cámara 4K', precio: 499.99, imagen:'assets/img/residentevil.jpg' }
  ];

  topConsolas = [
    { nombre: 'PlayStation 5', precio: 499.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Xbox Series X', precio: 499.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Nintendo Switch', precio: 299.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'PlayStation 5', precio: 499.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Xbox Series X', precio: 499.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Nintendo Switch', precio: 299.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'PlayStation 5', precio: 499.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Nintendo Switch', precio: 299.99, imagen: 'assets/img/residentevil.jpg' }
  ];

  juegosAlquilados = [
    { nombre: 'The Legend of Zelda', precio: 19.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 24.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Resident Evil Village', precio: 29.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'The Legend of Zelda', precio: 19.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 24.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Resident Evil Village', precio: 29.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'The Legend of Zelda', precio: 19.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Resident Evil Village', precio: 29.99, imagen: 'assets/img/residentevil.jpg' }
  ];

  smartphones = [
    { nombre: 'iPhone 14', precio: 1099.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Samsung Galaxy S22', precio: 999.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Google Pixel 7', precio: 799.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'iPhone 14', precio: 1099.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Samsung Galaxy S22', precio: 999.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Google Pixel 7', precio: 799.99, imagen:'assets/img/residentevil.jpg' },
    { nombre: 'iPhone 14', precio: 1099.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Google Pixel 7', precio: 799.99, imagen:'assets/img/residentevil.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }
}