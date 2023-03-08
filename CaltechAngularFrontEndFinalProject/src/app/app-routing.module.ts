import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './service/user/user.service';
// import { PlaceholderComponent } from './../components/placeholder/placeholder.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShoppingcartService } from './service/shoppingcart.service';
import { PaymentconfirmationComponent } from './paymentconfirmation/paymentconfirmation.component';

const routes: Routes = [
  // {path: '', component:LoginComponent},
  { path: '', component: FoodMenuComponent },
  { path: 'cart', component: CartComponent },
  {path: 'login', component:LoginComponent},
  { path: 'confirmation', component: PaymentconfirmationComponent },
  // {path: 'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  // {path: 'todos', component:ListTodosComponent, canActivate:[RouteGuardService]},
  // {path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  // {path: 'todos/:id', component:TodoComponent, canActivate:[RouteGuardService]},


  // {path: '**', component:ErrorComponent}
  {
    path: 'users',
    component: UsersComponent,
    // canActivateChild: [ ActivateGuard ],
    /* resolve: {
      users: UsersResolveGuard
    }, */
    children: [
      { path: ':userId', component: UserDetailsComponent },
      // { path: '', component: PlaceholderComponent }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService ]
})
export class AppRoutingModule { }
