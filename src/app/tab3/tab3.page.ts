import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  photos: string[] = [
    'assets/img/almi.jpeg',
    'assets/img/almi.jpeg',
    'assets/img/almi.jpeg',
    'assets/img/almi.jpeg',
  
  ];

  constructor() {}
}
