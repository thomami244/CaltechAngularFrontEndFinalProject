import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product} from '../list-product/list-product.component';
// import { Todo } from '../list-todos/list-todos.component';
import { ProductDataService } from '../service/data/product-data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

@Injectable()
export class ProductComponent  {
  id!: number;
  // products: Product = new Product(1, 'Coca-Cola', 'fizzy drink', 'www.url', 'drinks', 1.99, 100, 0, 0, true);
  products!: Product;


  // product_id!: number;

  // productname = productname;
  // this.productdescription = productdescription;
  // this.productURL = productURL;
  // this.productcategory = productcategory;
  // this.productprice = productprice;
  // this.productquantity = productquantity;
  // this.isActivated = isActivated;

}

// export class TodoComponent implements OnInit{


//   // public productname : string,
//   //   public productdescription : string,
//   //   public productURL : string,
//   //   public productcategory : string,
//   //   public productprice : number,
//   //   public productquantity : number,
//   //   public isActivated: boolean) {
//   // }
//   // todo5: Todo = new Todo(1,'Learn to Dance', false, new Date() )
//   // todo: Todo = Todo(1, '', false, new Date())
//   // todo: Todo = new Todo(1,'Learn to Dance', false, new Date() )


//   // todo5: Todo = new Todo(1,'Learn to Dance', false, new Date() )

//   // todo: Todo = Todo(1, '', false, new Date())
//   // todo: Todo = new Todo(1,'Learn to Dance', false, new Date() )

  // constructor(private productDataService:ProductDataService, private activatedRoute: ActivatedRoute, private router: Router ) { }
  // ngOnInit() {
  //   this.id = this.activatedRoute.snapshot.params[`id`];
  //   this.todo5 = new Todo(1, '', false, new Date());
  //   this.todoDataService.retrieveTodo(`vinodh`, this.id).subscribe(
  //      data => this.todo5 = data
  //     // data => console.log(data)
  //   )
  // }
//   // saveTodo(){
//   //   if ( this.id ==-1){
//   //     this.todoDataService.createTodo('vinodh',this.todo5).subscribe(
//   //       data => {
//   //         this.router.navigate([`todos`])
//   //       }
//   //     )
//   //   }
//   //   else{
//   //     this.todoDataService.updateTodo('vinodh',this.id, this.todo5).subscribe(
//   //       data => {
//   //         this.router.navigate([`todos`]);
//   //       }
//   //     )
//   //   }
//   // }
// }
