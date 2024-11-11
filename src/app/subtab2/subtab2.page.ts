import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../services/consolas.service';

@Component({
  selector: 'app-subtab2',
  templateUrl: './subtab2.page.html',
  styleUrls: ['./subtab2.page.scss'],
})
export class Subtab2Page implements OnInit {
  consolas: any[] = [];

  constructor(private consolasService: ConsolasService) { }

  ngOnInit() {
    this.loadConsolas();
  }

  loadConsolas() {
    this.consolasService.getConsolas().subscribe(
      (data) => {
        this.consolas = data;
      },
      (error) => {
        console.error('Error al cargar las consolas:', error);
      }
    );
  }
}
