import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  // {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  // {path: 'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  // {path: 'todos', component:ListTodosComponent, canActivate:[RouteGuardService]},
  // {path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  // {path: 'todos/:id', component:TodoComponent, canActivate:[RouteGuardService]},


  // {path: '**', component:ErrorComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
