import {TestBed, inject} from '@angular/core/testing';
import {XpService} from './xp.service';
import {RepositoryService} from '../repository-service/repository.service';
import {HttpClientModule} from '@angular/common/http';
import {Product} from '../../model/domain/catalog/product';
import {Category} from '../../model/domain/catalog/category';
import {Big} from 'big.js';

describe('XpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [XpService, RepositoryService]
    });
  });

  it('should be created', inject([XpService], (service: XpService) => {
    expect(service).toBeTruthy();
  }));
  it('Test Input 1', inject([XpService], (service: XpService) => {
    // cateogries
    const bookCategory = new Category('Book', 'BOOKX001');
    const otherCategory = new Category('Other Product', 'OTHERX001');
    const foodCategory = new Category('Food Product', 'FOODX001');

    // products
    const product1 = new Product('book', 12.49, false, bookCategory);
    const product2 = new Product('music cd', 14.99, false, otherCategory);
    const product3 = new Product('chocolate bar', 0.85, false, foodCategory);

    // sale
    service.createNewSale();

    service.currentSale.addProduct(product1, 2);
    service.currentSale.addProduct(product2, 1);
    service.currentSale.addProduct(product3, 1);

    const recipt = service.createReceiptCurrentSale();

    // product final prices
    const p1 = new Big(24.98);
    const p2 = new Big(16.49);
    const p3 = new Big(0.85);
    const prices = [p1, p2, p3];
    for (let i = 0; i < prices.length; i++) {
      const finalPrice = recipt.receiptLines[i].total;
      const priceExpected = prices[i];
      expect(finalPrice).toEqual(priceExpected);
    }
    // sales taxes
    const salesTaxesExpected = new Big(1.50);
    const salesTaxes = recipt.totalTaxesPaid;
    expect(salesTaxes).toEqual(salesTaxesExpected);
    // total
    const totalExpected = new Big(42.32);
    const total = recipt.total;
    expect(total).toEqual(totalExpected);

  }));

  it('Test Input 2', inject([XpService], (service: XpService) => {
    // cateogries
    const otherCategory = new Category('Other Product', 'OTHERX001');
    const foodCategory = new Category('Food Product', 'FOODX001');

    // products
    const product1 = new Product('Box of chocolate', 10, true, foodCategory);
    const product2 = new Product('Bottle of Perfume', 47.50, true, otherCategory);

    // sale
    service.createNewSale();
    service.currentSale.addProduct(product1, 1);
    service.currentSale.addProduct(product2, 1);

    // receipt
    const recipt = service.createReceiptCurrentSale();

    // product final prices
    const p1 = new Big(10.50);
    const p2 = new Big(54.65);
    const prices = [p1, p2];
    for (let i = 0; i < prices.length; i++) {
      const finalPrice = recipt.receiptLines[i].total;
      const priceExpected = prices[i];
      expect(finalPrice).toEqual(priceExpected);
    }
    // sales taxes
    const salesTaxesExpected = new Big(7.65);
    const salesTaxes = recipt.totalTaxesPaid;
    expect(salesTaxes).toEqual(salesTaxesExpected);
    // total
    const totalExpected = new Big(65.15);
    const total = recipt.total;
    expect(total).toEqual(totalExpected);

  }));

  it('Test Input 3', inject([XpService], (service: XpService) => {
    // cateogries
    const otherCategory = new Category('Other Product', 'OTHERX001');
    const foodCategory = new Category('Food Product', 'FOODX001');
    const medicineCategory = new Category('Mecicine prdouct', 'MEDX001');

    // products
    const product1 = new Product('Bottle of Perfume', 27.99, true, otherCategory);
    const product2 = new Product('Bottle of Perfume', 18.99, false, otherCategory);
    const product3 = new Product('headache pills', 9.75, false, medicineCategory);
    const product4 = new Product('box of chocolate', 11.25, true, foodCategory);

    // sale
    service.createNewSale();

    service.currentSale.addProduct(product1, 1);
    service.currentSale.addProduct(product2, 1);
    service.currentSale.addProduct(product3, 1);
    service.currentSale.addProduct(product4, 3);


    const recipt = service.createReceiptCurrentSale();

    // product final prices
    const p1 = new Big(32.19);
    const p2 = new Big(20.89);
    const p3 = new Big(9.75);
    const p4 = new Big(35.55);

    const prices = [p1, p2, p3, p4];

    for (let i = 0; i < prices.length; i++) {
      const finalPrice = recipt.receiptLines[i].total;
      const priceExpected = prices[i];
      expect(finalPrice).toEqual(priceExpected);
    }
    // sales taxes
    const salesTaxesExpected = new Big(7.90);
    const salesTaxes = recipt.totalTaxesPaid;
    expect(salesTaxes).toEqual(salesTaxesExpected);
    // total
    const totalExpected = new Big(98.38);
    const total = recipt.total;
    expect(total).toEqual(totalExpected);
  }));
});
