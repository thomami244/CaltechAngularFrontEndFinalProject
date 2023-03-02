import { Component, OnInit, HostListener,NgModule, Injectable, Inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,  FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FoodMenuComponent } from '../food-menu/food-menu.component';
import { LoginComponent } from '../login/login.component';
import { ProductDataService } from '../service/data/product-data.service';
// import { TodoDataService } from '../service/data/todo-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
  }

)


@Injectable()
export class Product {
  constructor (
    @Inject(String) public product_id : number,
    @Inject(String)  public productname : string,
    @Inject(String)  public productdescription : string,
    @Inject(String)  public productURL : string,
    @Inject(String)  public productcategory : string,
    @Inject(String) public productprice : number,
    @Inject(String) public availablequantity : number,
    @Inject(String) public productquantity : number,
    @Inject(Number) public producttotal : number,
    @Inject(String) public isActivated: boolean
    )

    {
  }
}

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [LoginComponent, ProductDataService],
})


export class ListProductComponent implements OnInit{
  // ngOnInit() {
  //   this.refreshProducts()
  // }
  // products: Product[] =[]
  product_id: number =0
  quantity = new FormControl('');
  productname: string =''
  productdescription: string =''
  productprice: number =0
  availablequantity: number =0

  @Input() category: string ="meals"

  @Input() username: string =""
  @Input() password: string =""
  @Input() productquantity: number =0
  @Output()productquantityChange: number =0

  @Input() producttotal: number =0
  @Output()producttotalChange: number =0

  constructor(
    public foodmenucomponent: FoodMenuComponent,
    public logincomponent: LoginComponent,


  ){}


  populateData(product_id: any, productprice: number, productname:any, productquantity: number){

    // console.log(Product)
    // console.log(this.quantity);
    // console.log(this.products);
    console.log(product_id);
    console.log(productname);
    console.log(productquantity);
    this.producttotal = productquantity * productprice;

    // this.producttotal =  (Math.round(this.producttotal* 100 )/100).toFixed(2);

    console.log(this.producttotal)

    // this.product.setValue({
    //   name: 'Akash',
    //   email: 'akash@xyz.com',
    //   gender: 'male',
    //   paymentType: 'Yearly',
    //   notification: 'false',
    // });
  }

  ngOnInit(): void {}

  products: Product[] = [
    {product_id:1,
      productname: 'Coca-Cola',
      productdescription: 'Fizzy Drink',
      productURL: 'www.coca-cola.com',
      productcategory: 'drinks',
      productprice: 1.99,
      availablequantity: 100,
      productquantity: 0,
      producttotal: 0,
      isActivated: true},

    { product_id:2,
      productname: 'burghers',
      productdescription: 'description burghers',
      productURL: 'www.burghers',
      productcategory: 'meals',
      productprice: 9.99,
      availablequantity: 20,
      productquantity: 0,
      producttotal: 0,
      isActivated: true},

      { product_id:3,
        productname: 'Potato wedges',
        productdescription: 'potato wedges with great flavor',
        productURL: 'www.potatowedges.com',
        productcategory: 'sides',
        productprice: 2.99,
        availablequantity: 15,
        productquantity: 0,
        producttotal: 0,
        isActivated: true},

        { product_id:4,
          productname: 'Seared fish',
          productdescription: 'Oven-baked fish in olive oil',
          productURL: 'www.fishnchipse.com',
          productcategory: 'meals',
          productprice: 15.99,
          availablequantity: 9,
          productquantity: 0,
          producttotal: 0,
          isActivated: true}
  ]

}

// updateItem(productname) {
//   console.log(productname)
//   // let url: string = "/update-item/" + name;
//   // this.router.navigateByUrl(url);
// }

    // constructor(private todoDataService: TodoDataService, private router: Router) { }

    // ngOnInit() {
    //   this.refreshTodos()
    // }
  //   todo5: Todo = new Todo(1,``, false, new Date)


  //   todos4: Todo[] = [];

  // refreshTodos(){
  //   this.todoDataService.retrieveAllTodos('vinodh').subscribe(
  //     response => {
  //       // console.log(response);
  //       this.todos4 = response;
  //     }
  //   )
  // }
  // updateTodo(id: any){
  //   // console.log(id);
  //   this.router.navigate(['todos', id])

  // }
  //     todos3 = [
  //   new Todo(1,'Learn to Dance', false, new Date() ),
  //   new Todo(2,'Become an expert at angular', false, new Date() ),
  //   new Todo(3,'visit the USA', false, new Date() )
  //   ]



// function updateItem(product_name: any, string: any) {
//   throw new Error('Function not implemented.');
// }
