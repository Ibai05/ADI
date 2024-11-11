import { TestBed } from '@angular/core/testing';

import { Producto2Service } from './producto2.service';

describe('Producto2Service', () => {
  let service: Producto2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Producto2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
