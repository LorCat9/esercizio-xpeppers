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
        console.log('Calculate Taxes: ' + product.name);
        const price = product.price;
        const nationalTax = this.round(this.calculateNationalTax(price));

        if (product.isImported()) {
            const importationTax = this.round(this.calculateImportationTax(price));
            console.log('Importation Tax: ' + importationTax);
            console.log('National Tax: ' + nationalTax);
            console.log(nationalTax.add(importationTax));
            return nationalTax.add(importationTax);
        }

        return nationalTax;
    };

    abstract calculateNationalTax(price: Big): Big;

    abstract calculateImportationTax(price: Big): Big;

    // arrotondo al piè
    private round(value: Big): Big {
        const roundFact = new Big(environment.roundFacotor);
        return value.div(roundFact).round(0, 1).mul(roundFact);
    }
}