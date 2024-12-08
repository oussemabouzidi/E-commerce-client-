import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SelectComponent,
    RouterModule,
    SpinnerComponent,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule
  ]
})
export class SharedModule { }
