import { TestBed } from '@angular/core/testing';

import { SaveAssetService } from './save-asset.service';

describe('SaveAssetService', () => {
  let service: SaveAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
