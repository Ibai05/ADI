import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-subtab4',
  templateUrl: './subtab4.page.html',
  styleUrls: ['./subtab4.page.scss'],
})
export class Subtab4Page implements OnInit {
  productosCesta = [
    { nombre: 'Producto 1', precio: 99.99, cantidad: 1, imagen: 'assets/img/residentevil.jpg', tipo: 'compra' },
    // Más productos de compra...
  ];
  productosAlquiler = [
    { nombre: 'Producto Alquiler 1', precio: 49.99, cantidad: 1, imagen:'assets/img/residentevil.jpg', tipo: 'alquiler' },
    // Más productos de alquiler...
  ];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {}

  // Función para agregar productos a la cesta
  agregarACesta(consola: any) {
    const productoExistente = this.productosCesta.find(p => p.nombre === consola.nombre_producto);
    
    if (productoExistente) {
      productoExistente.cantidad += 1; // Si ya existe, incrementa la cantidad
    } else {
      this.productosCesta.push({
        nombre: consola.nombre_producto,
        precio: consola.precio_venta,
        cantidad: 1,
        imagen: consola.imagen,
        tipo: 'compra'
      });
    }
  }

  actualizarCantidad(producto: any, cambio: number) {
    const nuevaCantidad = producto.cantidad + cambio;
    if (nuevaCantidad > 0) {
      producto.cantidad = nuevaCantidad;
    }
  }

  eliminarProducto(producto: any) {
    if (producto.tipo === 'compra') {
      this.productosCesta = this.productosCesta.filter(p => p !== producto);
    } else {
      this.productosAlquiler = this.productosAlquiler.filter(p => p !== producto);
    }
  }

  calcularTotal() {
    const totalCompra = this.productosCesta.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    const totalAlquiler = this.productosAlquiler.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    return totalCompra + totalAlquiler;
  }

  procederPago() {
    alert('Proceder al pago no está implementado todavía.');
  }
}
