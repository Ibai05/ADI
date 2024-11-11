import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-subtab3',
  templateUrl: './subtab3.page.html',
  styleUrls: ['./subtab3.page.scss'],
})
export class Subtab3Page implements OnInit {
  smartphones: any[] = []; // Array para almacenar los productos

  constructor(private smartphoneService: SmartphoneService) {}

  ngOnInit() {
    this.loadSmartphones();
  }

  // Cargar los smartphones desde el servicio
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
}
