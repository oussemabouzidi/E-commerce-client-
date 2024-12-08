import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApi = 'https://fakestoreapi.com/';
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(this.baseApi+'products');
  }

  getAllCategories(){
    return this.http.get(this.baseApi+'products/categories');
  }

  getProductsByCategorie(c: String){
    return this.http.get(this.baseApi + 'products/category/'+c);
  }

  getProductById(id : number){
    return this.http.get(this.baseApi+'products/'+id);
  }

}