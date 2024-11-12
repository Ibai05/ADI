// src/app/subtab6/subtab6.page.ts
import { Component, OnInit } from '@angular/core';
import { ReparacionService } from '../services/reparacion.service';

@Component({
  selector: 'app-subtab6',
  templateUrl: './subtab6.page.html',
  styleUrls: ['./subtab6.page.scss'],
})
export class Subtab6Page implements OnInit {
  productos: any[] = [];
  productoSeleccionado: string = '';
  descripcion: string = '';

  constructor(private productoService: ReparacionService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  onSubmit() {
    console.log('Producto:', this.productoSeleccionado);
    console.log('Descripción:', this.descripcion);

    // Reseteamos los valores después de enviar el formulario
    this.productoSeleccionado = '';
    this.descripcion = '';
  }
}
