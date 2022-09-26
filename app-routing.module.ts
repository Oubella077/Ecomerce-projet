import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {path:"products", component:AllProductsComponent },
  {path:"Detailsproduct/:id", component:ProductsDetailsComponent },
  {path : "home" ,component:HomeComponent},
  {path : "carts" ,component:CartComponent},
  {path:"**", redirectTo:"home", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
