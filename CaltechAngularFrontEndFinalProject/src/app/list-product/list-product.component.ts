import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, NgModule, Injectable, Inject,  } from '@angular/core';
import { ProductDataService } from '../service/data/product-data.service';
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { FormControl,  FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { IProduct } from './../interfaces/product';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [ProductDataService],
})

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
  }

)


export class ListProductComponent implements OnInit {

  products: IProduct[] | undefined;
  subscription!: Subscription;
  product_id: number =0
  quantity = new FormControl('');
  productname: string =''
  productdescription: string =''
  productprice: number =0
  availablequantity: number =0

  @Input() category: string ="meals"

  @Input() username!: string
  @Input() password!: string
  @Input() productquantity: number =0
  @Output()productquantityChange: number =0

  @Input() producttotal: number =0
  @Output()producttotalChange: number =0


  // @Input() adminLoggedIn:Boolean = false;
  // param!: any;
  // message: any;
  // newData: any;


  constructor(
    public foodmenucomponent: FoodMenuComponent,
    private activatedRoute: ActivatedRoute,
    private productdataservice: ProductDataService,

  ) { }

  ngOnInit() {



    this.subscription = this.productdataservice.retrieveAllProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(products);
      console.log(products[0].product_id);
      console.log(products[0].productname);
      console.log(products[0].productdescription);
      console.log(products[0].productURL);
      console.log(products[0].productcategory);
      console.log(products[0].productprice);
      console.log(products[0].availablequantity);
      console.log(products[0].productquantity);
      console.log(products[0].producttotal);
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
    this.producttotal = productquantity * productprice;
    console.log(this.producttotal)

  }


}
function getData() {
  throw new Error('Function not implemented.');
}
