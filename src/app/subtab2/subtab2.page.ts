import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab2',
  templateUrl: './subtab2.page.html',
  styleUrls: ['./subtab2.page.scss'],
})
export class Subtab2Page implements OnInit {
  consolas = [
    { nombre: 'PlayStation 5', precio: 499.99, imagen: 'assets/img/ps5.jpg' },
    { nombre: 'Xbox Series X', precio: 499.99, imagen: 'assets/img/xbox.jpg' },
    { nombre: 'Nintendo Switch', precio: 299.99, imagen: 'assets/img/switch.jpg' },
    { nombre: 'PS4 Pro', precio: 399.99, imagen: 'assets/img/ps4.jpg' },
    { nombre: 'Xbox One S', precio: 249.99, imagen: 'assets/img/xbox_one.jpg' },
    { nombre: 'Nintendo 3DS', precio: 129.99, imagen: 'assets/img/3ds.jpg' },
    { nombre: 'PS Vita', precio: 149.99, imagen: 'assets/img/psvita.jpg' }
  ];

  constructor() { }

  ngOnInit() { }
}