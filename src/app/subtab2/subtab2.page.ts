import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../services/consolas.service';
import { CestaService } from '../services/cesta.service';

@Component({
  selector: 'app-subtab2',
  templateUrl: './subtab2.page.html',
  styleUrls: ['./subtab2.page.scss'],
})
export class Subtab2Page implements OnInit {
  consolas: any[] = [];

  constructor(private consolasService: ConsolasService, private cestaService: CestaService) {}

  ngOnInit() {
    this.loadConsolas();
  }

  loadConsolas() {
    this.consolasService.getConsolas().subscribe(
      (data) => {
        this.consolas = data;
      },
      (error) => {
        console.error('Error al cargar las consolas:', error);
      }
    );
  }

  comprar(consola: any) {
    this.cestaService.agregarProducto(consola);
    console.log(`Producto ${consola.nombre_producto} agregado a la cesta`);
  }

  // Método para verificar si el producto está en la cesta
  productoEnCesta(consola: any) {
    console.log(this.cestaService.obtenerProductos());  // Verifica el contenido de la cesta
    return this.cestaService.obtenerProductos().some(p => p.id === consola.id);
  }

  // Método para obtener la cantidad del producto en la cesta
  obtenerCantidad(consola: any) {
    const producto = this.cestaService.obtenerProductos().find(p => p.id === consola.id);
    return producto ? `(${producto.cantidad})` : '';  // Muestra la cantidad si está en la cesta
  }
}
