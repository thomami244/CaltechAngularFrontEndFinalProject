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
   this.category = 'meals'
  }
  // FoodMenuComponent = new FormControl('');
  // quantity = new FormControl('');


  @Input() category: string = "meals"
  @Output() categoryChange: string = "meals"

  form = new FormGroup({
    category: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  changeCategory(e: any) {
    console.log(e.target.value);
    this.category = e.target.value

  }
}
