import {Component, OnInit} from '@angular/core';
import {Receipt} from '../model/domain/receipt/receipt';
import {XpService} from '../services/XpService/xp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  receipt: Receipt;

  constructor(protected xpService: XpService, private router: Router) {
  }

  ngOnInit() {
    this.receipt = this.xpService.createReceiptCurrentSale();
  }

  onNuovaSimulazione() {
    this.router.navigateByUrl('/home');
  }

}
