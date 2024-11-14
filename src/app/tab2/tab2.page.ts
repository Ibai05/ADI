import { Component, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  map!: GoogleMap;
  userMarker: any;
  companyMarker: any;

  constructor() {}

  async ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    this.map = await GoogleMap.create({
      id: 'google-map',
      element: document.getElementById('map')!,
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',  // Reemplaza con tu clave de API
      config: {
        center: { lat: 43.26798194009465, lng: -2.938611777307392 }, // Centro inicial
        zoom: 15,
      },
    });

    // Agregar marcador de la empresa
    this.companyMarker = await this.map.addMarker({
      coordinate: {
        lat: 43.26798194009465,
        lng: -2.938611777307392,
      },
      title: "Torre Iberdrola",
    });

    // Obtener y agregar marcador de la ubicación del usuario
    const position = await Geolocation.getCurrentPosition();
    this.userMarker = await this.map.addMarker({
      coordinate: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      title: "Mi Ubicación",
    });
  }

  // Centrar mapa en el marcador de la empresa
  async centerOnCompany() {
    await this.map.setCamera({
      coordinate: {
        lat: 43.26798194009465,
        lng: -2.938611777307392,
      },
      zoom: 15,
    });
  }

  // Centrar mapa en la ubicación del usuario
  async centerOnUserLocation() {
    if (this.userMarker) {
      const position = await Geolocation.getCurrentPosition();
      await this.map.setCamera({
        coordinate: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 15,
      });
    }
  }
}
