import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgIf,
    SharedModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() item : any = {};
  @Output() itemToAdd = new EventEmitter ;
  addButton : boolean = false ;
  amount : number = 0;
  constructor(private router : Router){}

  add(){
    if(this.amount == 0){
      alert("quantity can't be less than 1");
    }else{
      this.itemToAdd.emit({item : this.item, amount : this.amount });
      this.addButton = false ;
    }
  }
  navigateToDetails(id : number){
    this.router.navigate(['/details', id]);
  }
  
}
