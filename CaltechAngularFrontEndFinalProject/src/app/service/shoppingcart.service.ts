import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

// adding shopping cart based on angular docs
// https://angular.io/start/start-data
@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  items: IProduct[] = [];

  constructor() { }

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
