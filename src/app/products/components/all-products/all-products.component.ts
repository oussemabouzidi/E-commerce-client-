import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule, NgFor } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.scss',
    imports: [
        CommonModule,
        NgFor,
        SharedModule,
        ProductComponent,
    ]
})
export class AllProductsComponent implements OnInit {
  products:Product[] =[];
  categories:string[]= [];
  loading: boolean = false ;
  carteProduct : any[] = [] ;
  constructor(private service :ProductsService){}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true ;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false ;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  getCategories(){
    this.service.getAllCategories().subscribe(
      (res : any)=>{
        this.categories = res;
      },
      (error)=>{
        console.log("error fetching categories : ", error);
      }
    )
  }

  filterCategorie(event : any){
    let categorie = event.target.value ;
    if (categorie == "all"){
      this.getProducts();
    }else{
        this.loading = true ;
        this.service.getProductsByCategorie(categorie).subscribe(
        (res : any ) =>{
          this.products = res ;
          this.loading = false ;
        },
        (error)=>{
          alert("error filter categorie");
        }
      )
    }
  }

  addToCarte(event : any){
      if ('carte' in localStorage){
        this.carteProduct = JSON.parse(localStorage.getItem("carte")!);
        let exist = this.carteProduct.find(item => item.item.id == event.item.id);
        if(exist){
          alert("Product already added to the carte");
        }
        else{
          this.carteProduct.push(event);
          localStorage.setItem('carte', JSON.stringify(this.carteProduct));
        }
      }
    else{
      this.carteProduct.push(event);
      localStorage.setItem('carte', JSON.stringify(this.carteProduct));
    }
  }
}