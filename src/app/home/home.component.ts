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
  inputValid: boolean;

  quantities = [];

  constructor(public xpService: XpService, private router: Router) {
    for (let i = 1; i < 11; i++) {
      this.quantities.push(i);
    }
  }

  ngOnInit() {
    this.inputValid = true;
    const element = document.getElementById('navTop');
    element.scrollIntoView();
    this.xpService.createNewSale();
  }

  onAggiungiProdotto() {
    if (!this.checkInputData()) {
      this.inputValid = false;
    } else {
      this.inputValid = true;
      this.xpService.addProductCurrentSale(this.indexProductSelected, Number(this.quantitySelected));
    }
  }

  checkInputData() {
    return this.indexProductSelected && this.quantitySelected;
  }

  onCalcola() {
    this.router.navigateByUrl('receipt');
  }

  onRimuovi(index) {
    this.xpService.removeSaleLine(index);
  }

}
