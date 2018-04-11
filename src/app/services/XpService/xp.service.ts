import {Injectable} from '@angular/core';
import {Sale} from '../../model/domain/sale/sale';
import {Catalog} from '../../model/domain/catalog/catalog';
import {Receipt} from '../../model/domain/receipt/receipt';
import {ReceiptLine} from '../../model/domain/receipt/receiptLine';
import {TaxCalculator} from '../../model/taxes/taxCalculator';
import {RepositoryService} from '../repository-service/repository.service';

@Injectable()
export class XpService {


  private _catalog: Catalog;
  currentSale: Sale;

  private taxCalculator: TaxCalculator;

  constructor(private repositoryService: RepositoryService) {
    this.taxCalculator = new TaxCalculator();
    this._catalog = new Catalog();
    this.initCatalog();
  }

  createNewSale() {
    this.currentSale = new Sale();
  }

  createReceiptCurrentSale(): Receipt {
    const receipt = new Receipt();
    for (const saleLine of this.currentSale.saleLines) {
      const saleLineTaxes = this.taxCalculator.calculateSaleLineTaxes(saleLine);
      const totalPaid = saleLineTaxes.add(saleLine.getTotal());
      const receiptLine = new ReceiptLine(saleLine.product, saleLine.quantity, totalPaid);
      receipt.addReceiptLine(receiptLine);
    }
    return receipt;
  }

  initCatalog() {
    this.repositoryService.getCatalog(
      (error, catalog) => {
        if (error) {
          console.log('errore recupero catalogo');
        } else {
          this._catalog = catalog;
        }
      }
    );
  }

  removeSaleLine(index) {
    this.currentSale.removeSaleLine(index);
  }

  addProductCurrentSale(indexProductSelected: number, quantity: number) {
    this.currentSale.addProduct(this.catalog.products[indexProductSelected], quantity);
  }

  isCurrentSaleEmpty(): boolean {
    return this.currentSale.saleLines.length === 0;
  }

  // getter
  get catalog(): Catalog {
    return this._catalog;
  }
}
