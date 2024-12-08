import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule , NgFor , NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  carteProduct : any[] = [] ;
  total : any ;
  success:boolean = false ;

  constructor(private service : CartService){}

  ngOnInit(): void {
    this.getCarteProducts() ;
  }

  AddAmount(index : number){
    this.carteProduct[index].amount ++ ;
    localStorage.setItem('carte', JSON.stringify(this.carteProduct));
    this.getCarteTotle() ;

  }

  MinsAmount(index : number){
    this.carteProduct[index].amount -- ;
    localStorage.setItem('carte', JSON.stringify(this.carteProduct));
    this.getCarteTotle() ;
  }

  getCarteProducts(){
    if('carte' in localStorage){
      this.carteProduct = JSON.parse(localStorage.getItem('carte')!);
    }
    this.getCarteTotle() ;
    console.log(this.carteProduct);
  }

  getCarteTotle(){
    this.total = 0;
    for (let i in this.carteProduct){
      this.total += this.carteProduct[i].item.price * this.carteProduct[i].amount ;
    }
    this.total = this.total.toFixed(2);
  }

  detectChange(){
    localStorage.setItem('carte', JSON.stringify(this.carteProduct));
  }

  deleteProduct(index : number){
    this.carteProduct.splice(index , 1);
    localStorage.setItem('carte', JSON.stringify(this.carteProduct));
    this.getCarteTotle();
  }

  clearCart(){
    this.carteProduct = [];
    localStorage.setItem('carte', JSON.stringify(this.carteProduct));
    this.getCarteTotle();
  }

  addCart(){
    let products = this.carteProduct.map(item =>{
      return {
        productId : item.item.id,
        quantity : item.amount
      }
    })
    let Model = {
      userId : 5 ,
      date : new Date(),
      products : products
    }


    this.service.postCarte(Model).subscribe(
      (res)=>{
        console.log("carte added succesfully");
        this.success = true ;
      },
      (error)=>{
        alert("error in posting the carte !");
      }
    )
  }


}