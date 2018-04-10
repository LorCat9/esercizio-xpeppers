import {Product} from '../catalog/product';
import {Big} from 'big.js';
/**
 * Created by lorenzo on 09/04/18.
 */
export class ReceiptLine {

    private _quantity: number;
    private _product: Product;
    private _total: Big;        // taxes included

    constructor(product: Product, quantity: number, total) {
        this._product = product;
        this._quantity = quantity;
        this._total = new Big(total);
    }

    toString() {
        if (this._product.isImported()) {
            return this.quantity + ' ' + this._product.name + '(Imported): ' + this.total;
        } else {
            return this.quantity + ' ' + this._product.name + ': ' + this.total;
        }
    }

    // GETTER
    get quantity(): number {
        return this._quantity;
    }

    get total(): Big {
        return this._total;
    }

    get product(): Product {
        return this._product;
    }

    getTaxesPaid(): Big {
        return this.total.minus(this._product.price.mul(new Big(this.quantity)));
    }
}