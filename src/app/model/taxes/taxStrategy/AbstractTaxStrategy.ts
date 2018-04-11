import {Product} from '../../domain/catalog/product';
import {Big} from 'big.js';
import {environment} from '../../../../environments/environment';
/**
 * Created by lorenzo on 08/04/18.
 */
export abstract class AbstractTaxStrategy {

  nationalTaxRate: Big;
  importationTaxRate: Big;

  constructor() {
  }

  /* Methods */

  calculateTaxes(product: Product): Big {
    const price = product.price;
    const nationalTax = this.round(this.calculateNationalTax(price));

    if (product.isImported()) {
      const importationTax = this.round(this.calculateImportationTax(price));
      return nationalTax.add(importationTax);
    }

    return nationalTax;
  }

  abstract calculateNationalTax(price: Big): Big;

  abstract calculateImportationTax(price: Big): Big;

  // arrotondo
  private round(value: Big): Big {
    const roundFact = new Big(environment.roundFacotor);
    return value.div(roundFact).round(0, 1).mul(roundFact);
  }

}
