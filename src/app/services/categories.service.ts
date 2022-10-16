import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http : HttpClient) { }

  getAllCategories(){
    return this.http.get<any>('https://dummyjson.com/products/categories')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
