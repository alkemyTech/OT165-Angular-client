import { TestBed } from '@angular/core/testing';

import { ServiceSlide } from './service-slide.service';

describe('ServiceService', () => {
  let service: ServiceSlide;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSlide);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
