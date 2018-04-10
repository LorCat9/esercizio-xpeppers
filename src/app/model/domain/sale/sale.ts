import {SaleLine} from './saleLine';
import {Product} from '../catalog/product';
import {Big} from 'big.js';
/**
 * Created by lorenzo on 08/04/18.
 */

export class Sale {

    private _saleLines: Array<SaleLine>;

    constructor() {
        this._saleLines = new Array<SaleLine>();
    }

    getTotal(): Big {
        let total = new Big(0);
        for (const saleLine of this._saleLines) {
            total = total.add(saleLine.getTotal());
        }
        return total;
    }

    addProduct(productDescription: Product, quantity: number) {
        const saleLine = new SaleLine(productDescription, quantity);
        this._saleLines.push(saleLine);
    }

    removeSaleLine(index: number) {
        this.saleLines.splice(index, 1);
    }

    get saleLines(): Array<SaleLine> {
        return this._saleLines;
    }

}