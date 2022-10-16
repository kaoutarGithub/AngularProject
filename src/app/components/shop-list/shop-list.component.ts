import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  public productList : any;
  constructor(private allProducts: AllProductsService, private cartService : CartService) {}

  ngOnInit(): void {
    this.allProducts.getAllProducts()
    .subscribe(res=>{
      this.productList = res.products;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }

  addToCart(item : any){
    this.cartService.addToCart(item);
  }
}
