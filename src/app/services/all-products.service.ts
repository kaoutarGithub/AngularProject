import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Product } from '../components/interface/product';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<any>('https://dummyjson.com/products?limit=100')
    .pipe(map((res:any)=>{
      return res;
    }))


  }

  getLimitedProducts(numberOfresults : number){
    const skip = Math.floor(Math.random() * 100);
    return this.http.get<any>(`https://dummyjson.com/products?limit=`+numberOfresults+`&skip=${skip}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductsById(id : number) : Observable<Product>{
    return this.http.get<Product>('https://dummyjson.com/products/'+id)

  };


}
