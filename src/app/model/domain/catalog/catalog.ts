import {Product} from './product';
/**
 * Created by lorenzo on 09/04/18.
 */
export class Catalog {

  private _products: Array<Product>;

  constructor() {
    this._products = new Array<Product>();
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  get products(): Array<Product> {
    return this._products;
  }

}
