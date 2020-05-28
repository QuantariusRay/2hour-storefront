import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  of
} from 'rxjs';

export interface Product {
  id: number,
  productType: number,
  name: string,
  customFields: Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products = new BehaviorSubject([
    {
      id: 1,
      productType: 1,
      name: 'Novelty T',
      customFields: []
    },
    {
      id: 2,
      productType: 2,
      name: 'Coffee Mug',
      customFields: [
        { label: 'Inscription', fieldName: 'inscription' }
      ]
    },
    {
      id: 3,
      productType: 2,
      name: 'Dog Tag',
      customFields: [
        { label: 'Front Engraving', fieldName: 'front' },
        { label: 'Back Engraving', fieldName: 'back' }
      ]
    },
    {
      id: 4,
      productType: 2,
      name: 'Candy Corn',
      customFields: [
        { label: 'Top', fieldName: 'topColor' },
        { label: 'Middle', fieldName: 'middleColor' },
        { label: 'Bottom', fieldName: 'bottomColor' }
      ]
    },
  ]);

  get products() {
    return this._products;
  }

  getItemById(id: string) {
    return this._products.getValue().find((product: Product) => {
      return product.id === parseInt(id, 10);
    })
  }
}
