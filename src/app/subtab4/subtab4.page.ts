import { Component, OnInit } from '@angular/core';
import { CestaService } from '../services/cesta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtab4',
  templateUrl: './subtab4.page.html',
  styleUrls: ['./subtab4.page.scss'],
})
export class Subtab4Page implements OnInit {
  productosEnCesta: any[] = [];

  constructor(private cestaService: CestaService, private router: Router) {}

  ngOnInit() {
    this.productosEnCesta = this.cestaService.obtenerProductos();
  }

  vaciarCesta() {
    this.cestaService.vaciarCesta();
    this.productosEnCesta = [];
  }

  eliminarProducto(producto: any) {
    this.cestaService.eliminarProducto(producto);
    this.productosEnCesta = this.cestaService.obtenerProductos();
  }

  calcularTotal() {
    return this.productosEnCesta.reduce((total, producto) => {
      const precio = parseFloat(producto.precio_venta);
      return total + (isNaN(precio) ? 0 : precio);
    }, 0);
  }

  comprar() {
    if (this.productosEnCesta.length > 0) {
      this.router.navigate(['/pago']);
    } else {
      alert("La cesta está vacía. No puedes comprar.");
    }
  }
}
