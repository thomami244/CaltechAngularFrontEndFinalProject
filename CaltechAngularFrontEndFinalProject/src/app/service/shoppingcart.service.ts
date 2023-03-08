import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

// adding shopping cart based on angular docs
// https://angular.io/start/start-data

// The addToCart() method appends a product to an array of items
// The getItems() method collects the items users add to the cart and returns each item with its associated quantity
// The clearCart() method returns an empty array of items, which empties the cart

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
