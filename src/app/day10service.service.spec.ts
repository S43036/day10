import { TestBed, inject } from '@angular/core/testing';

import { Day10serviceService } from './day10service.service';

describe('Day10serviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Day10serviceService]
    });
  });

  it('should be created', inject([Day10serviceService], (service: Day10serviceService) => {
    expect(service).toBeTruthy();
  }));
});
