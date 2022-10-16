import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../services/all-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService : AllProductsService) { }

  id : any;

  ngOnInit(): void {
    this.productService.getProductsById(this.id)
    .subscribe(
      result => console.log(result)
      );
  }

}
