import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { CartService } from '../../services/cart.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-shop-left-sidebar',
  templateUrl: './shop-left-sidebar.component.html',
  styleUrls: ['./shop-left-sidebar.component.css']
})
export class ShopLeftSidebarComponent implements OnInit {

  public categorieList : any;
  public productList : any;
  constructor(private allCategories : CategoriesService, private allProducts: AllProductsService, private cartService : CartService) { }

  ngOnInit(): void {
    this.allCategories.getAllCategories()
    .subscribe(res=>{
      this.categorieList = res;
    });
    this.allProducts.getAllProducts()
    .subscribe(resp=>{
      this.productList = resp.products;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }

  addToCart(item : any){
    this.cartService.addToCart(item);
  }


}
