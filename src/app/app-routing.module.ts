import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CompletedOrderComponent } from './components/completed-order/completed-order.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shop-grid', component: ShopGridComponent},
  {path: "shop-left-sidebar", component: ShopLeftSidebarComponent},
  {path: "shop-list", component: ShopListComponent},
  {path: "shopping-cart", component: ShoppingCartComponent},
  {path: 'blog', component: BlogComponent},
  {path: "login", component: LoginComponent},
  {path: "single-blog", component: SingleBlogComponent},
  {path: "faq", component: FaqComponent},
  {path: "shipping-info", component: ShippingInfoComponent},
  {path: "completed-order", component: CompletedOrderComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: '**', pathMatch: 'full', component: PagenotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
