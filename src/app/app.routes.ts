import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

export const routes: Routes = [
    {path:"products" , component:AllProductsComponent},
    {path:"cart", component:CartComponent},
    {path:"details/:id", component:ProductsDetailsComponent},
    {path:"**", redirectTo:"products" ,pathMatch:"full"}
];
