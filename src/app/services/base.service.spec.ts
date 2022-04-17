import { TestBed } from '@angular/core/testing';
import { TestObject } from '../shared/models/TestObject';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService<TestObject>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
