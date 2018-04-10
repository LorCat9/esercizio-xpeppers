import {AbstractTaxStrategy} from '../AbstractTaxStrategy';
import {environment} from '../../../../../environments/environment';
import {Product} from '../../../domain/catalog/product';
import {Big} from 'big.js';
/**
 * Created by lorenzo on 08/04/18.
 */

export class FoodTaxStrategy extends AbstractTaxStrategy {
    nationalTaxRate: Big;
    importationTaxRate: Big;

    constructor() {
        super();
        this.nationalTaxRate = new Big(environment.foodNationalRate);
        this.importationTaxRate = new Big(environment.foodImportedRate);
    }

    calculateNationalTax(price: Big) {
        return price.mul(this.nationalTaxRate).div(new Big(100));
    }

    calculateImportationTax(price: Big) {
        return price.mul(this.importationTaxRate).div(new Big(100));
    }
}