import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateTypeProductComponent } from './create-type-product/create-type-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product', component: CreateProductComponent},
  {path: 'product/update', component: UpdateProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'productType', component: CreateTypeProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
