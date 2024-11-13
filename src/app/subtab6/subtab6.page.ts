import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../services/consolas.service';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-subtab6',
  templateUrl: './subtab6.page.html',
  styleUrls: ['./subtab6.page.scss'],
})
export class Subtab6Page implements OnInit {
  productos: { id: number; nombre_producto: string }[] = [];
  productoSeleccionado: string = '';
  descripcion: string = '';

  constructor(
    private consolasService: ConsolasService,
    private smartphoneService: SmartphoneService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.consolasService.getConsolas().subscribe((consolas) => {
      this.smartphoneService.getSmartphones().subscribe((smartphones) => {
        // Combina consolas y smartphones extrayendo solo id y nombre_producto
        this.productos = [
          ...consolas.map((c) => ({ id: c.id, nombre_producto: c.nombre_producto })),
          ...smartphones.map((s) => ({ id: s.id, nombre_producto: s.nombre_producto }))
        ];
      });
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
