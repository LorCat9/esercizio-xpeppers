import {Category} from './category';
import {Big} from 'big.js';
/**
 * Created by lorenzo on 08/04/18.
 */

export class Product {

    private _name: string;
    private _price: Big;
    private _imported: boolean;
    private _category: Category;

    constructor(name: string, price: number, imported: boolean, category: Category) {
        this._name = name;
        this._price = new Big(price);
        this._imported = imported;
        this._category = category;
    }

    isImported() {
        return this.imported;
    }

    toString(): string {
        if (this.isImported()) {
            return this.name + ' (Imported) at ' + this.price;
        } else {
            return this.name + ' at ' + this.price;
        }
    }

    // getter
    get name(): string {
        return this._name;
    }

    get price(): Big {
        return this._price;
    }

    get imported(): boolean {
        return this._imported;
    }

    get category(): Category {
        return this._category;
    }

}