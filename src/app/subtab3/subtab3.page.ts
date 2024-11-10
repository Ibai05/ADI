import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtab3',
  templateUrl: './subtab3.page.html',
  styleUrls: ['./subtab3.page.scss'],
})
export class Subtab3Page implements OnInit {
  dispositivos = [
    { nombre: 'iPhone 14', precio: 1099.99, imagen: 'assets/img/iphone14.jpg' },
    { nombre: 'iPad Pro', precio: 1199.99, imagen: 'assets/img/ipad_pro.jpg' },
    { nombre: 'Samsung Galaxy S22', precio: 999.99, imagen: 'assets/img/galaxy_s22.jpg' },
    { nombre: 'Google Pixel 7', precio: 799.99, imagen: 'assets/img/pixel7.jpg' },
    { nombre: 'Huawei MatePad', precio: 499.99, imagen: 'assets/img/matepad.jpg' }
  ];

  tablets = [
    { nombre: 'iPad Pro', precio: 1199.99, imagen: 'assets/img/ipad_pro.jpg' },
    { nombre: 'Huawei MatePad', precio: 499.99, imagen: 'assets/img/matepad.jpg' },
    { nombre: 'iPad Pro', precio: 1199.99, imagen: 'assets/img/ipad_pro.jpg' },
    { nombre: 'Huawei MatePad', precio: 499.99, imagen: 'assets/img/matepad.jpg' },
    { nombre: 'iPad Pro', precio: 1199.99, imagen: 'assets/img/ipad_pro.jpg' },
    { nombre: 'Huawei MatePad', precio: 499.99, imagen: 'assets/img/matepad.jpg' }
  ];

  iphones = [
    { nombre: 'iPhone 14', precio: 1099.99, imagen: 'assets/img/iphone14.jpg' },
    { nombre: 'iPhone 13', precio: 899.99, imagen: 'assets/img/iphone13.jpg' }
  ];

  smartphones = [
    { nombre: 'Samsung Galaxy S22', precio: 999.99, imagen: 'assets/img/galaxy_s22.jpg' },
    { nombre: 'Google Pixel 7', precio: 799.99, imagen: 'assets/img/pixel7.jpg' },
    { nombre: 'Xiaomi Mi 11', precio: 699.99, imagen: 'assets/img/mi11.jpg' },
    { nombre: 'OnePlus 9 Pro', precio: 799.99, imagen: 'assets/img/oneplus9.jpg' }
  ];

  constructor() { }

  ngOnInit() { }
}
