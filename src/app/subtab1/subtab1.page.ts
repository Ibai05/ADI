import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ConsolasService } from '../services/consolas.service';
import { SmartphoneService } from '../services/smartphone.service';
import { CestaService } from '../services/cesta.service'; // Asegúrate de tener este servicio

@Component({
  selector: 'app-subtab1',
  templateUrl: './subtab1.page.html',
  styleUrls: ['./subtab1.page.scss'],
})
export class Subtab1Page implements OnInit {
  videojuegos: any[] = [];
  consolas: any[] = [];
  smartphones: any[] = [];

  constructor(
    private productoService: ProductoService,
    private consolasService: ConsolasService,
    private smartphoneService: SmartphoneService,
    private cestaService: CestaService // Asegúrate de que CestaService está inyectado
  ) {}

  ngOnInit() {
    this.getVideojuegos();
    this.getConsolas();
    this.getSmartphones();
  }

  getVideojuegos() {
    this.productoService.getVideojuegos().subscribe(
      (data) => {
        this.videojuegos = data;
      },
      (error) => {
        console.error('Error al cargar los videojuegos recientes', error);
      }
    );
  }

  getConsolas() {
    this.consolasService.getConsolas().subscribe(
      (data) => {
        this.consolas = data;
      },
      (error) => {
        console.error('Error al cargar las consolas recientes', error);
      }
    );
  }

  getSmartphones() {
    this.smartphoneService.getSmartphones().subscribe(
      (data) => {
        this.smartphones = data;
      },
      (error) => {
        console.error('Error al cargar los smartphones recientes', error);
      }
    );
  }

  agregarACesta(producto: any) {
    this.cestaService.agregarProducto(producto); // Llama al método del servicio para agregar el producto
  }
}
