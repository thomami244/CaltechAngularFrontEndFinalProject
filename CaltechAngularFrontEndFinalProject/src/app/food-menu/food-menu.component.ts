import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators,  ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-food-menu',
    templateUrl: './food-menu.component.html',
    styleUrls: ['./food-menu.component.css'],
  // template: `
  // Food Menu: <input type="text" [formControl]="foodMenuControl">
  // `
})
export class FoodMenuComponent implements OnInit {
  ngOnInit(): void {
   this.productcategory = 'meals'
  }
  // FoodMenuComponent = new FormControl('');
  // quantity = new FormControl('');


  @Input() productcategory: string = "meals"
  @Output() productcategoryyChange: string = "meals"

  form = new FormGroup({
    productcategory: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  changeCategory(e: any) {
    console.log(e.target.value);
    this.productcategory = e.target.value

  }
}
