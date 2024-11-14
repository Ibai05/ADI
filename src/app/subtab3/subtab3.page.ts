import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../services/smartphone.service';
import { CestaService } from '../services/cesta.service';  // Importar CestaService

@Component({
  selector: 'app-subtab3',
  templateUrl: './subtab3.page.html',
  styleUrls: ['./subtab3.page.scss'],
})
export class Subtab3Page implements OnInit {
  smartphones: any[] = []; 

  constructor(
    private smartphoneService: SmartphoneService, 
    private cestaService: CestaService  // Inyectamos el CestaService
  ) {}

  ngOnInit() {
    this.loadSmartphones();
  }

  loadSmartphones() {
    this.smartphoneService.getSmartphones().subscribe(
      (data) => {
        this.smartphones = data;
      },
      (error) => {
        console.error('Error al cargar los smartphones', error);
      }
    );
  }

  agregarACesta(smartphone: any) {
    this.cestaService.agregarProducto(smartphone);
    
  }
}
