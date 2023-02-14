import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,  ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-food-menu',
    templateUrl: './food-menu.component.html',
    styleUrls: ['./food-menu.component.css'],
  // template: `
  // Food Menu: <input type="text" [formControl]="foodMenuControl">
  // `
})
export class FoodMenuComponent {
  // FoodMenuComponent = new FormControl('');
  quantity = new FormControl('');

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
  }
}
