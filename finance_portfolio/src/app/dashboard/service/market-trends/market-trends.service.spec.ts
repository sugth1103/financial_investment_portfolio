import { TestBed } from '@angular/core/testing';

import { MarketTrendsService } from './market-trends.service';

describe('MarketTrendsService', () => {
  let service: MarketTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
