import { TestBed, inject } from '@angular/core/testing';

import { ProductsParameterService } from './products-parameter-.service';

describe('ProductsParameterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsParameterService]
    });
  });

  it('should be created', inject([ProductsParameterService], (service: ProductsParameterService) => {
    expect(service).toBeTruthy();
  }));
});
