import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { SharedModule } from "../../../shared/shared.module";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-products-details',
    standalone: true,
    templateUrl: './products-details.component.html',
    styleUrl: './products-details.component.scss',
    imports: [SharedModule , NgIf]
})
export class ProductsDetailsComponent implements OnInit {
  id:any ;
  product : any ;
  loading : boolean = false ;
  constructor(private route : ActivatedRoute, private service : ProductsService){
    this.id = route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getProduct();
  }


  getProduct(){
    this.loading = true
    this.service.getProductById(this.id).subscribe(
      (res)=>{
        this.product = res; 
        this.loading = false ;
      },
      (error)=>{
        alert("error getting the product infos" + error);
      }
    )
  }


}