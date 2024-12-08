import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() title : string ="";
  @Input() data : any[] = [];
  @Output() selectedValue = new EventEmitter();


  detectChanges(event : any){
    this.selectedValue.emit(event);
  }


}
