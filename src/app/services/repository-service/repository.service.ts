import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Catalog} from '../../model/domain/catalog/catalog';
import {Category} from '../../model/domain/catalog/category';
import {Product} from '../../model/domain/catalog/product';

@Injectable()
export class RepositoryService {



  constructor(private httpClient: HttpClient) {
  }

  getCatalog(callback) {
    this.httpClient.get(environment.ApiGateway).subscribe(
      (data) => {
        const catalog = this.createCatalog(data);
        callback(null, catalog);
      },
      (error) => {
        callback(error, null);
      }
    );
  }

  private createCatalog(data): Catalog {
    const catalog = new Catalog();
    for (const pd of data.products) {
      const ct = new Category(pd.category.name, pd.category.code);
      const prd = new Product(pd.name, pd.price, pd.imported, ct);
      catalog.addProductDescription(prd);
    }
    for (const ctg of data.categories) {
      const ct = new Category(ctg.name, ctg.code);
      catalog.addCategory(ct);
    }
    return catalog;
  }

}
