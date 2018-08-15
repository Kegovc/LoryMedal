import { TestBed, inject } from '@angular/core/testing';

import { ContenidoService } from './contenido.service';

describe('ContenidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenidoService]
    });
  });

  it('should be created', inject([ContenidoService], (service: ContenidoService) => {
    expect(service).toBeTruthy();
  }));
});
