import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private httpClient : HttpClient, private productService : AllProductsService) { }


  public productLeatest : any;
  public productTrending : any;

  ngOnInit(): void {
    this.productService.getLimitedProducts(6)
    .subscribe(res=>{
      this.productLeatest = res.products;

      this.productLeatest.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
    this.productService.getLimitedProducts(4)
    .subscribe(res=>{
      this.productTrending = res.products;

      this.productLeatest.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  }



}
