import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BookListingComponent } from './Model/book-listing/book-listing.component';


const routes: Routes = [
  {path: 'books', component: BookListingComponent},
  {path: 'your-cart', component: CartComponent},
  {path: "**", redirectTo: 'books'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
