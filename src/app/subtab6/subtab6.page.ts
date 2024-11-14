import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../services/consolas.service';
import { SmartphoneService } from '../services/smartphone.service';
import { ReparacionService } from '../services/reparacion.service';

@Component({
  selector: 'app-subtab6',
  templateUrl: './subtab6.page.html',
  styleUrls: ['./subtab6.page.scss'],
})
export class Subtab6Page implements OnInit {
  productos: { id: number; nombre_producto: string }[] = [];
  productoSeleccionado: number | null = null;
  descripcion: string = '';

  constructor(
    private consolasService: ConsolasService,
    private smartphoneService: SmartphoneService,
    private reparacionService: ReparacionService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.consolasService.getConsolas().subscribe({
      next: (consolas) => {
        this.smartphoneService.getSmartphones().subscribe({
          next: (smartphones) => {
            // Combina consolas y smartphones extrayendo solo id y nombre_producto
            this.productos = [
              ...consolas.map((c) => ({ id: c.id, nombre_producto: c.nombre_producto })),
              ...smartphones.map((s) => ({ id: s.id, nombre_producto: s.nombre_producto }))
            ];
          },
          error: (error) => {
            console.error('Error al cargar smartphones:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error al cargar consolas:', error);
      }
    });
  }

  onSubmit() {
    if (this.productoSeleccionado === null || !this.descripcion.trim()) {
      console.error('Por favor, selecciona un producto y escribe una descripción.');
      return;
    }

    const reparacionData = {
      id_producto: this.productoSeleccionado,
      descripcionUsuario: this.descripcion,
    };

    this.reparacionService.crearReparacion(reparacionData).subscribe({
      next: (response) => {
        console.log('Reparación creada exitosamente:', response);
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al crear la reparación:', error);
      }
    });
  }

  resetForm() {
    this.productoSeleccionado = null;
    this.descripcion = '';
  }
}
