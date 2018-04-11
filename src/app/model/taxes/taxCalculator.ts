import {Product} from '../domain/catalog/product';
import {TaxStrategyFactory} from './taxStrategy/taxStrategyFactory';
import {Big} from 'big.js';
import {SaleLine} from '../domain/sale/saleLine';
/**
 * Created by lorenzo on 08/04/18.
 */
export class TaxCalculator {

  constructor() {}

  calculateProductTaxes(product: Product): Big {
    const taxStrategy = TaxStrategyFactory.getInstance().getProductTaxStrategy(product.category.code);
    const tax = taxStrategy.calculateTaxes(product);
    return tax;
  }

  calculateSaleLineTaxes(saleLine: SaleLine): Big {
    const productTaxes = this.calculateProductTaxes(saleLine.product);
    return productTaxes.mul(new Big(saleLine.quantity));
  }

}
