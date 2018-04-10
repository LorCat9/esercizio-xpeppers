import {Product} from './product';
import {Category} from './category';
/**
 * Created by lorenzo on 09/04/18.
 */
export class Catalog {

    private _productDescriptions: Array<Product>;
    private _categories: Array<Category>;

    constructor() {
        this._productDescriptions = new Array<Product>();
        this._categories = new Array<Category>();
    }

    addProductDescription(productDescription: Product) {
        this.productDescriptions.push(productDescription);
    }

    getCategory(index) {
        return this.categories[index];
    }

    addCategory(category: Category) {
        this.categories.push(category);
    }

    get productDescriptions(): Array<Product> {
        return this._productDescriptions;
    }

    get categories(): Array<Category> {
        return this._categories;
    }
}