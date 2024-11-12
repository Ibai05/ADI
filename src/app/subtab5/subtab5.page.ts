import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-subtab5',
  templateUrl: './subtab5.page.html',
  styleUrls: ['./subtab5.page.scss'],
})
export class Subtab5Page implements OnInit {
  videojuegos: any[] = [];
  tiposVideojuegos: string[] = [];
  filtroSeleccionado = 'todos';
  videojuegosFiltrados: any[] = [];
  videojuegosDestacados: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getVideojuegos().subscribe({
      next: (data) => {
        this.videojuegos = data;
        this.tiposVideojuegos = [...new Set(this.videojuegos.map(videojuego => videojuego.tipo))];
        this.videojuegosFiltrados = this.videojuegos;
        this.videojuegosDestacados = this.videojuegos.slice(0, 8);
      },
      error: (error) => {
        console.error('Error al cargar videojuegos:', error);
      }
    });
  }

  filtrarVideojuegos() {
    if (this.filtroSeleccionado === 'todos') {
      this.videojuegosFiltrados = this.videojuegos;
    } else {
      this.videojuegosFiltrados = this.videojuegos.filter(videojuego => videojuego.tipo === this.filtroSeleccionado);
    }
  }
  
}