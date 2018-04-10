import {Component, OnInit} from '@angular/core';
import {XpService} from '../services/XpService/xp.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  indexProductSelected: number;
  quantitySelected: number;

  quantities = [1, 2, 3, 4, 5];

  constructor(public xpService: XpService, private router: Router) {
  }

  ngOnInit() {
    const element = document.getElementById('navTop');
    element.scrollIntoView();
    this.xpService.createNewSale();
  }

  onAggiungiProdotto() {
    if (!this.indexProductSelected || !this.quantitySelected) {
      this.xpService.warningMessage('inserire tutti i campi');
    } else {
      this.xpService.addProductCurrentSale(this.indexProductSelected, Number(this.quantitySelected));
    }
  }

  onCalcola() {
    this.router.navigateByUrl('receipt');
  }

  onRimuovi(index) {
    this.xpService.removeSaleLine(index);
  }

}
