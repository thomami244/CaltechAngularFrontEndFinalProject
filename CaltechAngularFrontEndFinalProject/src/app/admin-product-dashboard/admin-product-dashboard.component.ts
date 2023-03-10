import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-product-dashboard',
  templateUrl: './admin-product-dashboard.component.html',
  styleUrls: ['./admin-product-dashboard.component.css']
})
export class AdminProductDashboardComponent {
  @Input() adminLoggedIn:Boolean = false;

}
