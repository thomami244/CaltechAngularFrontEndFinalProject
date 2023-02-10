import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TodoDataService } from '../service/data/todo-data.service';


export class Product {
  constructor (public product_id : number,
    public productname : string,
    public productdescription : string,
    public productURL : string,
    public productcategory : string,
    public productprice : number,
    public productquantity : number,
    public isActivated: boolean) {
  }
}

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})


export class ListProductComponent {
  // ngOnInit() {
  //   this.refreshProducts()
  // }
  products: Product[] =[]

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

    // products = [
    //   {product_id:1,
    //     productname: 'Learn to Dance',
    //     productdescription: 'description Learn to Dance',
    //     productURL: 'www.Learn to Dance',
    //     productcategory: 'category Learn to Dance',
    //     productprice: 1.99,
    //     productquantity: 100,
    //     isActivated: true}

    //   { product_id:2,
    //     productname: 'burghers',
    //     productdescription: 'description burghers',
    //     productURL: 'www.burghers',
    //     productcategory: 'category burghers',
    //     productprice: 9.99,
    //     productquantity: 20,
    //     isActivated: true}
    // ]

}
