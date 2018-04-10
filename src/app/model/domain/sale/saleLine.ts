import {Product} from '../catalog/product';
import {TaxCalculator} from '../../taxes/taxCalculator';
import {Big} from 'big.js';
/**
 * Created by lorenzo on 08/04/18.
 */
export class SaleLine {
    private _quantity: number;
    private _product: Product;

    constructor(productDescription: Product, quantity: number) {
        this._product = productDescription;
        this._quantity = quantity;
    }

    getTotal(): Big {
        return this.product.price.mul(this.quantity);
    }

    get quantity(): number {
        return this._quantity;
    }

    get product(): Product {
        return this._product;
    }
}