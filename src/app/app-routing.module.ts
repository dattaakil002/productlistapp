import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productlist',
    pathMatch: 'full'
  },
  {
    path: 'productlist',
    component: ProductlistComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
