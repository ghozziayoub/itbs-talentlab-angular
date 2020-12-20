import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "category-list",
    component: CategoryListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "category-add",
    component: CategoryAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "product-list",
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "product-add",
    component: ProductAddComponent,
    canActivate: [AuthGuard]
  },


  //404
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
