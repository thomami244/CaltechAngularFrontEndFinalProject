import { Component } from '@angular/core';
import { ShoppingcartService } from '../service/shoppingcart.service';
import { FormBuilder } from '@angular/forms';

// obtained form builder from angular docs
// https://angular.io/start/start-forms

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.shoppingcartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private shoppingcartService: ShoppingcartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.shoppingcartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
