import { Component } from '@angular/core';
import { ShoppingcartService } from '../service/shoppingcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.shoppingcartService.getItems();

  constructor(
    private shoppingcartService: ShoppingcartService
  ) { }

}
