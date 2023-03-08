import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, NgModule, Injectable, Inject,  } from '@angular/core';
import { ProductDataService } from '../service/data/product-data.service';
import { CartDataService } from '../service/cart/cart-data.service';
import { CartSessionDataService } from '../service/cartSession/cart-session-data.service';
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { FormControl,  FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from './../interfaces/product';
import { IUser } from './../interfaces/user';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { ICartSession } from '../interfaces/cart-session';
import { ICart } from '../interfaces/cart';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
//   declarations: []
//   }
// )

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})


export class ListProductComponent implements OnInit {
  products: IProduct[] | undefined;
  subscription!: Subscription;
  product_id: number =0
  quantity = new FormControl('');
  productname: string =''
  productdescription: string =''
  productprice: number =0
  product!: IProduct
  availablequantity: number =0
  dummyUser!: IUser
  @Input() category: string ="meals"
  @Input() username!: string
  @Input() password!: string
  @Input() productorderquantity: number =0
  @Input() cartsession!: ICartSession
  // @Input() cart: ICart = {
  //   productorderquantity: 0,
  //   productordertotalamount: 0,
  //   product!= 0,
  //   cartSession: cartsession
  // }

  // cart.productorderquantity: 0,
  //   productordertotalamount: 0

  @Output()productorderquantityChange: number =0
  @Input() productordertotalamount: number =0
  @Output()productordertotalamountChange: number =0
  // @Input() adminLoggedIn:Boolean = false;
  // param!: any;
  // message: any;
  // newData: any;
  constructor(
    public foodmenucomponent: FoodMenuComponent,
    private activatedRoute: ActivatedRoute,
    private productdataservice: ProductDataService,
    private cartsessiondataservice: CartSessionDataService,
    private cartdataservice: CartDataService,
    public logincomponent: LoginComponent,
  ) { }
  ngOnInit() {
    // at the beginning of a cart session - the user id will not be known as the user has not yet logged in
    // consequently a -1 userid will be used and updated with the real userid when the user logs in
    // consequently the cart session will not be saved in the database until both the products have been added to the cart and the user logs in

    // this.cartsession = new ICartSession((this.dummyUser), '', false, new Date());
    // user: IUser,
    // cartSessionId: number



    // this.subscription = this.cartsessiondataservice.createCartSession(this.username).subscribe((cartSession: ICartSession) => {
    //   this.user = user;}


    this.subscription = this.productdataservice.retrieveAllProducts().subscribe((products: IProduct[]) => {
      this.products = products;
      console.log(products);
      console.log(products[0].product_id);
      console.log(products[0].productname);
      console.log(products[0].productdescription);
      console.log(products[0].productURL);
      console.log(products[0].productcategory);
      console.log(products[0].productprice);
      console.log(products[0].availablequantity);
      console.log(products[0].isActivated);
      console.log(products[1].product_id);
      console.log(products[1].productname);
      console.log(products[1].productdescription);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  populateData(product_id: any, productprice: number, productname:any, productquantity: number){
    console.log(product_id);
    console.log(productname);
    console.log(productquantity);
    this.productordertotalamount = this.productorderquantity * productprice;
    console.log(this.productordertotalamount)
  }
}
function getData() {
  throw new Error('Function not implemented.');
}
