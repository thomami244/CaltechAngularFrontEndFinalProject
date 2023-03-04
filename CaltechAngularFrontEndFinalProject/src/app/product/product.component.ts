import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './../interfaces/product';
import { HookLogger } from './../decorators/class.decorator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
@HookLogger({
  hooks: [
    'ngAfterContentInit',
    'ngAfterViewChecked',
  ]
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit() {
  }

}





// import { Component, Injectable, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Product} from '../list-product/list-product.component';
// // import { Todo } from '../list-todos/list-todos.component';
// import { ProductDataService } from '../service/data/product-data.service';


// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })

// @Injectable()
// export class ProductComponent  {
//   id!: number;

//   products!: Product;




// }
