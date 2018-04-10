import { TestBed, inject } from '@angular/core/testing';

import { ReceiptAuthGuardService } from './receipt-auth-guard.service';

describe('ReceiptAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceiptAuthGuardService]
    });
  });

  it('should be created', inject([ReceiptAuthGuardService], (service: ReceiptAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
