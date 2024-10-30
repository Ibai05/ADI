import { Component, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  map!: GoogleMap;

  constructor() {}

  async ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    this.map = await GoogleMap.create({
      id: 'google-map', 
      element: document.getElementById('map')!,
      apiKey: 'AIzaSyAp0YTi1cADoMis4e-_YhYArd2HcaOpBFg', // Reemplaza con tu clave de API
      config: {
        center: { lat: 43.26798194009465, lng: -2.938611777307392 }, 
        zoom: 15, 
      },
    });

    await this.map.addMarker({
      coordinate: {
        lat: 43.26798194009465,
        lng: -2.938611777307392,
      },
      title: "Torre Iberdrola",
    });
  }
}
