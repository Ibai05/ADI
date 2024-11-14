import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private productos: any[] = [];

  constructor(private toastController: ToastController) { }

  obtenerProductos() {
    return this.productos;
  }

  agregarProducto(producto: any) {
    const productoExistente = this.productos.find(p => p.id === producto.id);
  
    if (productoExistente) {
      productoExistente.cantidad += 1; // Aumentar la cantidad del producto existente
    } else {
      producto.cantidad = 1; // Inicializar cantidad si es nuevo
      this.productos.push(producto);
    }
  
    this.mostrarMensaje('Producto añadido con éxito');
  }
  

  eliminarProducto(producto: any) {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  vaciarCesta() {
    this.productos = [];
  }

  private async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 500,
      position: 'middle',  // Esto coloca el mensaje en el centro
      color: 'success'
    });
    toast.present();
  }
}
