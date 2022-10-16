import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {

  public productList : any;
  searchkey:string ="";
  constructor(private allProducts: AllProductsService, private cartService : CartService ) {}

  ngOnInit(): void {
    this.allProducts.getAllProducts()
    .subscribe(res=>{
      this.productList = res.products;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });

    this.cartService.search.subscribe((val:any)=>{
      this.searchkey  = val;
    })

    });
  }

  addToCart(item : any){
    this.cartService.addToCart(item);
  }
  getSingleProduct(id : any){
    this.allProducts.getProductsById(id);

  }
}
