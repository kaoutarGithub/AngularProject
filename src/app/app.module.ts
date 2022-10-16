import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { CompletedOrderComponent } from './components/completed-order/completed-order.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    ShopGridComponent,
    ProductDetailsComponent,
    BlogComponent,
    PagenotFoundComponent,
    ShopLeftSidebarComponent,
    ShopListComponent,
    ShoppingCartComponent,
    LoginComponent,
    CompletedOrderComponent,
    ShippingInfoComponent,
    SingleBlogComponent,
    FaqComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
