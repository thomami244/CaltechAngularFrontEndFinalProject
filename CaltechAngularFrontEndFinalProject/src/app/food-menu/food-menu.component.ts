import { Component } from '@angular/core';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';
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
}
