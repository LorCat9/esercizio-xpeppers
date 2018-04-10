import { Injectable } from '@angular/core';
import {XpService} from '../XpService/xp.service';
import {CanActivate} from '@angular/router';

@Injectable()
export class ReceiptAuthGuardService implements CanActivate {

  constructor(private xpService: XpService) {
  }

  // solo se è stato selezionato almeno un prodotto
  canActivate() {
    return this.xpService.currentSale.saleLines.length > 0;
  }

}
