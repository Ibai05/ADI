import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab1',
  templateUrl: './subtab1.page.html',
  styleUrls: ['./subtab1.page.scss'],
})
export class Subtab1Page implements OnInit {
  productos = [
    { nombre: 'Resident Eil', precio: 29.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Producto 2', precio: 49.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Producto 3', precio: 15.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Producto 4', precio: 99.99, imagen: 'assets/img/residentevil.jpg' },
    { nombre: 'Producto 5', precio: 79.99, imagen: 'assets/img/residentevil.jpg' } 
  ];

  constructor() { }

  ngOnInit() {
  }

}
