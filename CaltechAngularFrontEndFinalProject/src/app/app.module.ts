import { UserService } from './service/user/user.service';
import { ProductDataService } from './service/data/product-data.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { IUser } from './interfaces/user';
import { IProduct } from './interfaces/product';


@NgModule({
  declarations: [
    AppComponent,
    FoodMenuComponent,
    NavbarComponent,
    ProductComponent,
    ListProductComponent,
    LoginComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    AppendorPipe,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FoodMenuComponent, UserService, LoginComponent, ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
