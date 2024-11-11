import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto2.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  videojuego: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProductoById(Number(id)).subscribe({
        next: (data) => {
          this.videojuego = data;
        },
        error: (error) => {
          console.error('Error al cargar el videojuego:', error);
        }
      });
    }
  }
}
