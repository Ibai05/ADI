import { Component, OnInit } from '@angular/core';
import { CestaService } from '../services/cesta.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-subtab4',
  templateUrl: './subtab4.page.html',
  styleUrls: ['./subtab4.page.scss'],
})
export class Subtab4Page implements OnInit {
  productosEnCesta: any[] = [];
  loading: any;

  constructor(
    private cestaService: CestaService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.productosEnCesta = this.cestaService.obtenerProductos();  // Actualizamos la cesta al iniciar
  }

  async mostrarCargando() {
    this.loading = await this.loadingController.create({
      message: 'Procesando compra...',
      spinner: 'crescent', 
      backdropDismiss: false 
    });
    await this.loading.present();
  }

  vaciarCesta() {
    this.cestaService.vaciarCesta();  // Elimina todos los productos de la cesta
    this.productosEnCesta = [];  // Vaciamos también la lista de productos en la vista
  }

  eliminarProducto(producto: any) {
    this.cestaService.eliminarProducto(producto);  // Lógica para eliminar producto
    this.productosEnCesta = this.cestaService.obtenerProductos();  // Actualizamos la cesta
  }

  calcularTotal() {
    return this.productosEnCesta.reduce((total, producto) => {
      const precio = parseFloat(producto.precio_venta);
      const cantidad = producto.cantidad || 1;  // Asegura que la cantidad sea al menos 1 si no está definida
      return total + (isNaN(precio) ? 0 : precio * cantidad);  // Multiplicamos precio por cantidad
    }, 0);
  }

  async comprar() {
    if (this.productosEnCesta.length > 0) {
      await this.mostrarCargando();

      setTimeout(async () => {
        this.vaciarCesta();  // Vacía la cesta al completar la compra
        
        const toast = await this.toastController.create({
          message: 'Compra realizada con éxito',
          duration: 2000,
          color: 'success',
          position: 'middle' // Mensaje centrado
        });
        toast.present();

        this.loading.dismiss();  // Oculta el cargando

        // Actualiza la cesta
        this.productosEnCesta = [];  // Limpiar productos en vista después de la compra
      }, 2000); 
    } else {
      const toast = await this.toastController.create({
        message: 'La cesta está vacía',
        duration: 2000,
        position: 'middle'  // Mensaje centrado
      });
      toast.present();
    }
  }
}
