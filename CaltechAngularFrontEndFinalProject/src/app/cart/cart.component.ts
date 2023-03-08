import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../service/shoppingcart.service';
import { FormBuilder } from '@angular/forms';
import { IProduct } from '../interfaces/product';

// obtained form builder from angular docs
// https://angular.io/start/start-forms

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  grandtotal: number = 0

  items = this.shoppingcartService.getItems();


  ngOnInit() {

    this.items.forEach((item: IProduct) => {
      (this.grandtotal += item.producttotal);
    });


  }

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
