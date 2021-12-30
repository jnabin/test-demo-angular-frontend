import { TestBed } from '@angular/core/testing';

import { PaginatedTableService } from './paginated-table.service';

describe('PaginatedTableService', () => {
  let service: PaginatedTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatedTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
