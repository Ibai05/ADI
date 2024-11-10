
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab5',
  templateUrl: './subtab5.page.html',
  styleUrls: ['./subtab5.page.scss'],
})
export class Subtab5Page implements OnInit {
  videojuegos = [
    { nombre: 'Resident Evil Village', precio: 19.99, tipo: 'Miedo', imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'The Legend of Zelda', precio: 24.99, tipo: 'Aventura', imagen: 'assets/img/zelda.jpg' },
    { nombre: 'Cyberpunk 2077', precio: 29.99, tipo: 'Ciencia Ficción', imagen: 'assets/img/cyberpunk.jpg' },
    { nombre: 'Silent Hill', precio: 14.99, tipo: 'Miedo', imagen: 'assets/img/silenthill.jpg' },
    { nombre: 'FIFA 23', precio: 9.99, tipo: 'Deportes', imagen: 'assets/img/fifa23.jpg' },
    { nombre: 'Call of Duty', precio: 19.99, tipo: 'Acción', imagen: 'assets/img/cod.jpg' },
    { nombre: 'Halo Infinite', precio: 19.99, tipo: 'Acción', imagen: 'assets/img/halo.jpg' },
    { nombre: 'Super Mario Odyssey', precio: 24.99, tipo: 'Aventura', imagen: 'assets/img/mario.jpg' },
    // Agrega más productos según sea necesario
  ];

  tiposVideojuegos = ['Miedo', 'Aventura', 'Ciencia Ficción', 'Deportes', 'Acción'];
  filtroSeleccionado = 'todos';
  videojuegosFiltrados: { nombre: string; precio: number; tipo: string; imagen: string; }[] = [];
  videojuegosDestacados: { nombre: string; precio: number; tipo: string; imagen: string; }[] = [];

  constructor() { }

  ngOnInit() {
    this.videojuegosFiltrados = this.videojuegos; // Mostrar todos por defecto
    this.videojuegosDestacados = this.videojuegos.slice(0, 8); // Mostrar los primeros 8 como destacados
  }

  filtrarVideojuegos() {
    if (this.filtroSeleccionado === 'todos') {
      this.videojuegosFiltrados = this.videojuegos;
    } else {
      this.videojuegosFiltrados = this.videojuegos.filter(videojuego => videojuego.tipo === this.filtroSeleccionado);
    }
  }
}